import puppeteer from 'puppeteer';

const APP = 'http://localhost:8000/demo/';
const width = 1440;
const height = 860;

let page;
let browser;

beforeAll( async () => {

	browser = await puppeteer.launch( {
		headless: true,
	} );

	page = await browser.newPage();

	await page.setViewport( {
		width,
		height
	} );

} );

describe( 'Accessibility Tests', () => {

	test( 'Open and close a menu item with the keyboard', async () => {

		// Visit the page in headless Chrome
		await page.goto( APP );
		let accessibilityTree;

		// make sure all nav items with children use aria-haspopup
		const popupArray = await page.$$eval('.menu-item.menu-item-has-children > a', el => el.map(x => x.getAttribute("aria-haspopup")));;
		popupArray.forEach(function(hasPopup) {
			expect(hasPopup).toEqual('true');
		});

		// Tab into the UI
		await page.keyboard.press( 'Tab' );
		await page.keyboard.press( 'Tab' );

		accessibilityTree = await page.accessibility.snapshot();

		// Second item should be focused and have a popup
		await expect( accessibilityTree.children[1].focused ).toBe( true );
		await expect( accessibilityTree.children[1].haspopup ).toEqual( 'menu' );

		await page.keyboard.press( String.fromCharCode(13) );

	} );

	test( 'Open and close a submenu with a keyboard', async () => {

		await page.goto( APP );
		let submenu

		// Tab into the UI
		await page.keyboard.press( 'Tab' );
		await page.keyboard.press( 'Tab' );

		// Sub menu should be hidden
		submenu = await page.evaluate('document.querySelector(".sub-menu").getAttribute("aria-hidden")');
		await expect(submenu).toEqual('true');

		// Enter to open the sub menu
		await page.keyboard.press( String.fromCharCode(13) );

		// submenu should be displayed
		submenu = await page.evaluate('document.querySelector(".sub-menu").getAttribute("aria-hidden")');
		await expect(submenu).toEqual('false');

		// Back up and close the submenu
		await page.keyboard.down( 'Shift' );
		await page.keyboard.press( 'Tab' );
		await page.keyboard.up( 'Shift' );
		await page.keyboard.press( String.fromCharCode(13) );

		// Sub menu should be hidden
		submenu = await page.evaluate('document.querySelector(".sub-menu").getAttribute("aria-hidden")');
		await expect(submenu).toEqual('true');

	} );

} );

afterAll( () => {
	browser.close();
} );
