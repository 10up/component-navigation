import puppeteer from 'puppeteer';

const APP = 'http://localhost:3000/demo/';
const width = 1440;
const height = 860;

let page;
let browser;

beforeAll( async () => {

	browser = await puppeteer.launch( {
		headless: false,
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
		let tree;
		console.log(parentElement);
		const parentElement = await page.$('.menu-item.menu-item-has-children > a');
		await page.focus( '.menu-item.menu-item-has-children > a' );
		await expect( parentElement.getAttribute('aria-haspopup') ).toBe( true );

		await page.keyboard.press( String.fromCharCode(13) );

		// Focus the first item with chidlren
		await page.keyboard.press( 'Tab' );
		await page.keyboard.press( 'Tab' );

		// Check the aria status
		// await expect( targetItem.getAttribute('aria-haspopup') ).toBe( true );

		// Hit enter to open the menu
		await page.keyboard.press( String.fromCharCode(13) );
		await page.keyboard.press( 'Tab' );

	} );

	test( 'Open and close a menu sub item with a keyboard', async () => {

		await page.goto( APP );

	} );

	test( 'Open and close a menu item with a mouse', async () => {

		await page.goto( APP );

	} );

} );

afterAll( () => {
	// browser.close();
} );
