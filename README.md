# 10up Navigation

Accessible navigation component.

## Installation

### NPM
 `npm install --save @10up/component-navigation`

### Standalone
 Clone this repo and import `navigation.js` and `navigation.css` from the `dist/` directory.

## API

 This component accepts two arguments, the selector for the navigation container and an object containing configuration settings and optional callbacks.

### Settings

 - `action`: The action to use to open menu items _(default) **hover**_
 - `breakpoint`: Viewport breakpoint to switch to small screen menu _(default) **(min-width: 48em)**_

### Callbacks

 - `onCreate`: Called after the component is initialized on page load
 - `onOpen`: Called when a menu item is opened
 - `onClose`: Called when a menu item is closed
 - `onSubmenuOpen`: Called when a submenu item is opened
 - `onSubmenuClose`: Called when a submenu item is closed

## Usage

### Markup

 This is the markup template expected by the component.

 ```html
<nav class="site-navigation" role="navigation" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement">

	<a href="#primary-nav" data-responsive-nav-control="primary-nav">
		<span class="screen-reader-text">Primary Menu</span>
		<span aria-hidden="true">☰</span>
	</a>

	<ul id="primary-nav" class="primary-menu">
		<li id="menu-item-1912" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1912">
			<a href="#!aboutus">About Us</a>
		</li>
		<li id="menu-item-1913" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1913">
			<a href="#!ourwork">Our Work</a>
			<ul class="sub-menu">
				<li id="menu-item-1914" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1914">
					<a href="#!js">JavaScript</a>
				</li>
				<li id="menu-item-4494" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4494">
					<a href="#!wp">WordPress</a>
					<ul class="sub-menu">
						<li id="menu-item-4495" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-4495">
							<a href="#!plugins">Plugins</a>
						</li>
						<li id="menu-item-4496" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-4496">
							<a href="#!themes">Themes</a>
						</li>
						<li id="menu-item-4496" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-4496">
							<a href="#!last">Last WP Item</a>
						</li>
					</ul>
				</li>
			</ul>
		</li>
		<li id="menu-item-1915" class="current-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
			<a href="#!giving">Giving Back</a>
		</li>
		<li id="menu-item-1916" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1916 menu-item-has-children">
			<a href="#!blog">Blog</a>
			<ul class="sub-menu">
				<li class="menu-item"><a href="#!post">Blog Post 1</a></li>
				<li class="menu-item"><a href="#!post">Blog Post 2</a></li>
				<li class="menu-item"><a href="#!post">Blog Post 3</a></li>
			</ul>
		</li>
		<li id="menu-item-1916" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1916">
			<a href="#!contact">Contact</a>
		</li>
	</ul>

</nav>
 ```

### CSS

 The styles can be imported into your existing codebase by using PostCSS imports, or by including the standalone CSS file in your project.

#### PostCSS Imports
 `@import '@10up/component-navigation';`

#### Standalone
 Include the `navigation.css` file from the `dist/` directory.

### JavaScript

 Create a new instance by supplying the selector to use for the navigation and an object containing any necessary configuration settings and callback functions.

#### NPM

```javascript
import navigation from '@10up/component-navigation';

navigation( '.navigation', {
	action: 'click',
	onCreate: function() {
		console.log( 'onCreate callback' );
	},
	onOpen: function() {
		console.log( 'onOpen callback' );
	},
	onClose: function() {
		console.log( 'onClose callback' );
	},
	onSubmenuOpen: function() {
		console.log( 'onSubmenuOpen callback' );
	},
	onSubmenuClose: function() {
		console.log( 'onSubmenuClose callback' );
	}
} );
```

#### Standalone

Include the `navigation.js` file from the `dist/` directory and access the component from the gobal `TenUp` object.

```javascript
let myNavigation = new TenUp.navigation( '.navigation', {
	action: 'click',
	onCreate: function() {
		console.log( 'onCreate callback' );
	},
	onOpen: function() {
		console.log( 'onOpen callback' );
	},
	onClose: function() {
		console.log( 'onClose callback' );
	},
	onSubmenuOpen: function() {
		console.log( 'onSubmenuOpen callback' );
	},
	onSubmenuClose: function() {
		console.log( 'onSubmenuClose callback' );
	}
} );
```

## Demo

An example implementation can be found in the `index.html` file in the root of this package.
