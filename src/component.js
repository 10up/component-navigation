'use strict';

export default class TenUpNavigation {


	constructor( element, options = {} ) {
		// Defaults
		const defaults = {

			action: 'hover',
			breakpoint: '(min-width: 48em)',

			// Event callbacks
			onCreate: null,
			onOpen: null,
			onClose: null,
			onSubmenuOpen: null,
			onSubmenuClose: null,
		};

		if ( ! element || 'string' !== typeof element ) {
			console.error( '10up Navigation: No target supplied. A valid target (menu) must be used.' ); // eslint-disable-line
			return;
		}

		// Settings
		this.settings = Object.assign( {}, defaults, options );

		// Set MQ
		this.mq = window.matchMedia( this.settings.breakpoint );

		// Menu container
		this.$menu = document.querySelector( element );

		// Bail out if there's no menu.
		if ( ! this.$menu ) {
			console.error( '10up Navigation: Target not found. A valid target (menu) must be used.' ); // eslint-disable-line
			return;
		}

		this.$menuToggle = document.querySelector( `[data-responsive-nav-control="${this.$menu.getAttribute( 'id' )}"]` );

		// Also bail early if the toggle isn't set.
		if ( ! this.$menuToggle ) {
			console.error( '10up Navigation: No menu toggle found. A valid menu toggle must be used.' ); // eslint-disable-line
			return;
		}

		// Set all submenus and menu items.
		this.$submenus = this.$menu.querySelectorAll( 'ul' );
		this.$menuItems = this.$menu.querySelectorAll( 'li' );

		// Update the html element classes for styles.
		// Otherwise it'll fallback to :target.
		document.querySelector( 'html' ).classList.remove( 'no-js' );
		document.querySelector( 'html' ).classList.add( 'js' );

		// Setup tasks
		this.setupMenu();
		this.setupSubMenus();
		this.setupListeners();

		// Do any callbacks, if assigned.
		if ( this.settings.onCreate && 'function' === typeof this.settings.onCreate ) {
			this.settings.onCreate.call();
		}
	}

	/**
	 * Setup
	 */

	/**
	 * Sets up the main menu for the navigation.
	 * Includes adding classes and ARIA.
	 * We use "scoped" classes so we can be more confident that there will be no collisions.
	 *
	 * @returns {null} Nothing.
	 */
	setupMenu() {

		const id = this.$menu.getAttribute( 'id' );
		const href = this.$menuToggle.getAttribute( 'href' );
		const hrefTarget = href.replace( '#', '' );

		// Check for a valid ID on the menu.
		if ( ! id || '' === id ) {
			console.error( '10up Navigation: Target (menu) must have a valid ID attribute.' ); // eslint-disable-line
			return;
		}

		// Check that the menu toggle is set to use the menu for fallback.
		if ( hrefTarget !== id ) {
			console.warn( '10up Navigation: The menu toggle href and menu ID are not equal.' ); // eslint-disable-line
		}

		// Add classes for our plugin styles.
		this.$menu.closest( 'nav' ).classList.add( 'TenUp__navigation' );
		this.$menu.classList.add( 'TenUp__navigation__menu' );
		this.$menu.classList.add( 'TenUp__navigation__menu--main' );
		this.$menuToggle.classList.add( 'TenUp__navigation__menu-toggle' );

		// Add additional classes based on interaction type.
		if ( 'click' === this.settings.action ) {
			this.$menu.classList.add( 'TenUp__navigation__menu--click' );
		} else {
			this.$menu.classList.add( 'TenUp__navigation__menu--hover' );
		}

		// Update classes on menu items.
		this.$menuItems.forEach( $menuItem => {
			$menuItem.classList.add( 'TenUp__navigation__menu-item' );
		} );

		// Update ARIA.
		this.$menuToggle.setAttribute( 'aria-controls', hrefTarget );

		// Sets up ARIA tags related to screen size based on our media query.
		this.setMQMenuA11y();
	}

	/**
	 * Sets up the submenus.
	 * Adds JS classes and initial AIRA attributes.
	 *
	 * @returns {null} Nothing.
	 */
	setupSubMenus() {

		this.$submenus.forEach( ( $submenu, index ) => {
			const $anchor    = $submenu.previousElementSibling;
			const submenuID  = `tenUp-submenu-${index}`;

			$submenu.classList.add( 'TenUp__navigation__menu' );
			$submenu.classList.add( 'TenUp__navigation__menu--submenu' );

			$submenu.setAttribute( 'id', submenuID );
			$anchor.classList.add( 'TenUp__navigation__submenu-parent-anchor' );

			// Update ARIA.
			$submenu.setAttribute( 'aria-label', 'Submenu' );
			$anchor.setAttribute( 'aria-controls', submenuID );
			$anchor.setAttribute( 'aria-haspopup', true );

			// Sets up ARIA tags related to screen size based on our media query.
			this.setMQSubbmenuA11y();
		} );
	}

	/**
	 * Binds our various listeners for the plugin.
	 * Includes specific element listeners as well as media query.
	 *
	 * @returns {null} Nothing.
	 */
	setupListeners() {
		const comp = this;
		// Media query listener.
		// We're using this instead of resize + debounce because it should be more efficient than that combo.
		this.mq.addListener( this.setMQ.bind( comp ) );

		// Menu toggle listener.
		this.$menuToggle.addEventListener( 'click', this.listenerMenuToggleClick.bind( comp ) );

		// Submenu listeners.
		// Mainly applies to the anchors of submenus.
		this.$submenus.forEach( $submenu => {
			const $anchor = $submenu.previousElementSibling;

			if ( 'hover' === this.settings.action ) {
				$anchor.addEventListener( 'focus', this.listenerSubmenuAnchorFocus.bind( comp ) );
			}

			$anchor.addEventListener( 'click', this.listenerSubmenuAnchorClick.bind( comp ) );
		} );

		// Document specific listeners.
		// Mainly used to close any open menus.
		document.addEventListener( 'click', this.listenerDocumentClick.bind( comp ) );
		document.addEventListener( 'keyup', this.listenerDocumentKeyup.bind( comp ) );
	}

	/**
	 * Set
	 */

	/**
	 * Sets an media query related functions when the query boundry is reached.
	 *
	 * @returns {null} Nothing.
	 */
	setMQ() {
		this.setMQMenuA11y();
		this.setMQSubbmenuA11y();
	}

	/**
	 * Sets any ARIA that changes as a result of the media query boundry being passed.
	 * Specifically for the toggle and main menu.
	 *
	 * @returns {null} Nothing.
	 */
	setMQMenuA11y() {

		// Large
		if ( this.mq.matches ) {
			this.$menu.setAttribute( 'aria-hidden', false );
			this.$menuToggle.setAttribute( 'aria-expanded', true );
			this.$menuToggle.setAttribute( 'aria-hidden', true );
		// Small
		} else {
			this.$menu.setAttribute( 'aria-hidden', true );
			this.$menuToggle.setAttribute( 'aria-expanded', false );
			this.$menuToggle.setAttribute( 'aria-hidden', false );
		}

	}

	/**
	 * Sets an media query related functions when the query boundry is reached.
	 * Specifically for submenus.
	 *
	 * @returns {null} Nothing.
	 */
	setMQSubbmenuA11y() {
		this.$submenus.forEach( $submenu => {
			$submenu.setAttribute( 'aria-hidden', true );
		} );
	}

	/**
	 * Opens the passed submenu.
	 *
	 * @param   {element} $submenu The submenu to open. Required.
	 * @returns {null}             Nothing.
	 */
	openSubmenu( $submenu ) {
		// Open the submenu by updating ARIA and class.
		$submenu.setAttribute( 'aria-hidden', false );
		$submenu.classList.add( 'TenUp__navigation__menu--submenu-is-open' );

		// Custom open event
		if ( this.settings.onSubmenuOpen && 'function' === typeof this.settings.onSubmenuOpen ) {
			this.settings.onSubmenuOpen.call();
		}
	}

	/**
	 * Closes the passed submenu.
	 *
	 * @param   {element} $submenu The submenu to close. Required.
	 * @returns {null}             Nothing.
	 */
	closeSubmenu( $submenu ) {
		const $anchor = $submenu.previousElementSibling;
		const $childSubmenus = $submenu.querySelectorAll( 'li > .TenUp__navigation__menu--submenu-is-open' );

		// Close the submenu by updating ARIA and class.
		$submenu.setAttribute( 'aria-hidden', true );
		$submenu.classList.remove( 'TenUp__navigation__menu--submenu-is-open' );

		if ( $childSubmenus ) {
			// Close any children as well.
			// Update their ARIA and class.
			this.closeSubmenus( $childSubmenus );
		}

		if ( ! this.mq.matches ) {
			$anchor.focus();
		}

		// Custom close event
		if ( this.settings.onSubmenuClose && 'function' === typeof this.settings.onSubmenuClose ) {
			this.settings.onSubmenuClose.call();
		}
	}

	/**
	 * Closes all submenus in the node list.
	 *
	 * @param   {nodelist} $submenus The node list of submenus to close. Required.
	 * @returns {null}               Nothing.
	 */
	closeSubmenus( $submenus ) {
		$submenus.forEach( $submenu => {
			this.closeSubmenu( $submenu );
		} );
	}

	/**
	 * Listeners
	 */

	/**
	 * Menu toggle handler.
	 * Opens or closes the menu according to current state.
	 *
	 * @param {Object} event The event object.
	 * @returns {null}       Nothing.
	 */
	listenerMenuToggleClick( event ) {
		const isExpanded = ( 'true' === this.$menuToggle.getAttribute( 'aria-expanded' ) );

		// Don't act like a link.
		event.preventDefault();

		// Don't bubble.
		event.stopPropagation();

		// Is the menu currently open?
		if ( isExpanded ) {

			// Update classes
			this.$menu.classList.remove( 'TenUp__navigation__menu--is-open' );
			this.$menuToggle.classList.remove( 'TenUp__navigation__menu-toggle--is-open' );

			// Update ARIA
			this.$menu.setAttribute( 'aria-hidden', true );
			this.$menuToggle.setAttribute( 'aria-expanded', false );

			// Custom close event
			if ( this.settings.onClose && 'function' === typeof this.settings.onClose ) {
				this.settings.onClose.call();
			}
		} else {

			// Update classes
			this.$menu.classList.add( 'TenUp__navigation__menu--is-open' );
			this.$menuToggle.classList.add( 'TenUp__navigation__menu-toggle--is-open' );

			// Update ARIA
			this.$menu.setAttribute( 'aria-hidden', false );
			this.$menuToggle.setAttribute( 'aria-expanded', true );

			// Focus the first link in the menu
			this.$menu.querySelectorAll( 'a' )[0].focus();

			// Custom open event
			if ( this.settings.onOpen && 'function' === typeof this.settings.onOpen ) {
				this.settings.onOpen.call();
			}
		}
	}

	/**
	 * Document click handler.
	 * Closes all open submenus on a click outside of the menu.
	 *
	 * @returns {null} Nothing.
	 */
	listenerDocumentClick() {
		const $openSubmenus = this.$menu.querySelectorAll( '.TenUp__navigation__menu--submenu-is-open' );

		// Bail if no submenus are found.
		if ( ! $openSubmenus ) {
			return;
		}

		// Close the submenus.
		this.closeSubmenus( $openSubmenus );
	}

	/**
	 * Document keyup handler.
	 * Closes all open menus on a escape key.
	 * Refocuses after closing submenus.
	 *
	 * @param   {Object} event The event object.
	 * @returns {null}         Nothing.
	 */
	listenerDocumentKeyup( event ) {
		const $openSubmenus = this.$menu.querySelectorAll( '.TenUp__navigation__menu--submenu-is-open' );

		// Bail early if not using the escape key or if no submenus are found.
		if ( ! $openSubmenus || 27 !== event.keyCode ) {
			return;
		}

		// Close submenus
		this.closeSubmenus( $openSubmenus );

		// If we're set to click, set the focus back.
		if ( 'click' === this.settings.action ) {
			$openSubmenus[0].previousElementSibling.focus();
		}
	}

	/**
	 * Submenu anchor click handler.
	 * Opens or closes the submenu accordingly.
	 * Only fires based on settings and if the media query is appropriate.
	 *
	 * @param   {Object} event The event object. Required.
	 * @returns {null}          Nothing.
	 */
	listenerSubmenuAnchorClick( event ) {
		const $anchor = event.target;
		const $submenu = $anchor.nextElementSibling;
		const isHidden = ( 'true' === $submenu.getAttribute( 'aria-hidden' ) );

		// Bail if set to hover and we're on a large screen.
		if ( 'hover' === this.settings.action && this.mq.matches ) {
			return;
		}

		// Don't let the link act like a link.
		event.preventDefault();

		// Don't bubble.
		event.stopPropagation();

		// Is the submenu hidden?
		if ( isHidden ) {
			// Yes, open it.
			this.openSubmenu( $submenu );
		} else {
			// No, close it.
			this.closeSubmenu( $submenu );
		}
	}

	/**
	 * Submenu anchor focus handler.
	 * Opens or closes the submenu accordingly.
	 * Only fires based on settings and if the media query is appropriate.
	 *
	 * @param   {object} event The event object.
	 * @returns {null}         Nothing.
	 */
	listenerSubmenuAnchorFocus( event ) {
		const $anchor = event.target;
		const $menuItem = $anchor.parentNode;
		const $submenu = $anchor.nextElementSibling;
		const $childSubmenus = $menuItem.parentNode.querySelectorAll( '.TenUp__navigation__menu--submenu' );

		// Bail early if no submenu is found or if we're on a small screen.
		if ( ! $submenu || ! this.mq.matches ) {
			return;
		}

		// Close all sibling menus
		this.closeSubmenus( $childSubmenus );

		// Open this menu
		this.openSubmenu( $submenu );
	}
}
