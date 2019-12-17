import puppeteer from 'puppeteer';

const APP = 'https://10up.github.io/component-navigation/demo/';
const width = 600;
const height = 600;

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

	test( 'Open and close small screen menu', async () => {

		await page.goto( APP );

		const menuToggleExpanded = await page.evaluate( 'document.querySelector(".site-menu-toggle").getAttribute("aria-expanded")' );
		let menuToggleHidden = await page.evaluate( 'document.querySelector(".site-menu-toggle").getAttribute("aria-hidden")' );
		let menuToggleEControls = await page.evaluate( 'document.querySelector(".site-menu-toggle").getAttribute("aria-controls")' );
		let mainMenuState = await page.evaluate( 'document.querySelector(".primary-menu").getAttribute("aria-hidden")' );
		let accessibilityTree = await page.accessibility.snapshot();

		// check aria-expanded
		await expect( menuToggleExpanded ).toEqual( 'false' );

		// check aria-hidden
		await expect( menuToggleHidden ).toEqual( 'false' );
		await expect( mainMenuState ).toEqual( 'true' );

		// check aria-controls
		await expect( menuToggleEControls ).toEqual( 'primary-nav' );

		// Tab into the UI
		await page.keyboard.press( 'Tab' );

		// Open the menu
		await page.keyboard.press( String.fromCharCode( 13 ) );

		mainMenuState = await page.evaluate( 'document.querySelector(".primary-menu").getAttribute("aria-hidden")' );

		accessibilityTree = await page.accessibility.snapshot();

		// check aria-expanded
		await expect( accessibilityTree.children[0].expanded ).toBe( true );
		await expect( mainMenuState ).toEqual( 'false' );

		// First menu item should have focused
		await expect( accessibilityTree.children[1].focused ).toBe( true );

	} );

} );

afterAll( () => {
	browser.close();
} );
