/**
 * An internal object for storing enums. Used in helpers.js. Always has two objects: `edit` and `position`.
 */
declare var enums: {
    edit: {
        tileY: 0;
        tileX: 1;
        charY: 2;
        charX: 3;
        time: 4;
        char: 5;
        id: 6;
        color: 7;
    };
    position: {
        tileX: 0;
        tileY: 1;
        charX: 2;
        charY: 3;
    };
    [key: string]: JSEnum;
};

/**
 * Creates an "enum", a.k.a. an object with property names and incrementing numbers.
 * @remarks It is supposed to create something like the enums in TypeScript, where every element has an increasing index. The elements of this enum can then be accessed with `enum.element1 (will return 1).`
 * @param vars The variables to include in the enum.
 * @returns The enum.
 *
 * Example: Creating a {@link Protections | protection} enum:
 * @example
 * ```js
 * var Protections = makeEnum(["Public", "Member", "Owner"]);
 * ```
 */
declare function makeEnum(vars: string[]): JSEnum;

declare interface JSEnum {
    [key: string]: number;
}

/**
 * Asserts that a particular expression is truthy, and throws an error if it is falsy.
 * @param exp The expression that is expected to be truthy.
 * @param optMsg An optional message to include with the error in the falsy case.
 */
declare function assert(exp: boolean, optMsg?: string): void;

/**
 * Tests if any number is outside the JavaScript safe integer range (`Number.MAX_SAFE_INTEGER` and `Number.MIN_SAFE_INTEGER`). Returns `true` if every number is within the limit, returns `false` if otherwise.
 * @param ints The integers to test.
 * @returns A boolean determining whether or not all integers are all safe. If even one number is not safe, `false` is returned.
 */
declare function intmax(ints: number | number[]): boolean;

/**
 * Clamps a number into JavaScript's safe integer range.
 * @param x The number to clamp.
 * @returns The clamped number.
 */
declare function clipIntMax(x: number): number;

/**
 * DOM traversal function. Checks if a child has a particular ancestor.
 * @param element The child to check.
 * @param parElement The ancestor to check against.
 * @returns `true` if `element` has that ancestor (`parElement`), or if `element` is equal to `parElement`. `false` otherwise.
 */
declare function closest(element: Node, parElement: Node): boolean;

/**
 * Parses a URL query string into an object.
 * @param search The URL query string to parse.
 * @returns An object which contains the parsed query string.
 */
declare function getQuerystring(search: string): Record<string, string>;

/**
 * A {@link Vector2} point, but as an array. Represented as [x, y].
 */
type Point = [number, number];
/**
 * A {@link TileCoords} point, but as an array. Represented as [tileX, tileY, charX, charY].
 */
type TileCharPoint = [number, number, number, number];

/**
 * Bresenham's line algorithm.
 * @param x0 X coordinate of start point.
 * @param y0 Y coordinate of start point.
 * @param x1 X coordinate of end point.
 * @param y1 Y coordinate of end point.
 * @param max The maximum number of points to make (2000 by default).
 * @returns The set of points that make up the specified line.
 * @see https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm
 */
declare function lineGen(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    max?: number,
): Point[];

/**
 * Euclidean distance.
 * @param x1 X coordinate 1.
 * @param y1 Y coordinate 1.
 * @param x2 X coordinate 2.
 * @param y2 Y coordinate 2.
 * @returns The distance between those two points.
 * @see https://en.wikipedia.org/wiki/Euclidean_distance
 */
declare function getDistance(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
): number;

/**
 * Orders two {@link Tiles | tile coordinates} to form a rectangular selection.
 *
 * After execution, `coordA` becomes the top-left corner, and `coordB` becomes the bottom-right corner.
 * @remarks Modifies coordinates in-place. Ordered as [tileX, tileY, charX, charY].
 * @param coordA Tile coordinate 1.
 * @param coordB Tile coordinate 2.
 */
declare function orderRangeABCoords(
    coordA: TileCharPoint,
    coordB: TileCharPoint,
): void;

/**
 * Compares two {@link Tiles | tile coordinates}.
 * @param coordA Tile coordinate 1.
 * @param coordB Tile coordinate 2.
 * @returns A point containing the equivalence of tile coordinates. -1 if coordinate A is less than coordinate B, 1 if it's greater than coordinate B, and 0 if they're equal.
 */
declare function compareABCoords(
    coordA: TileCharPoint,
    coordB: TileCharPoint,
): Point;

declare interface AjaxSettings {
    /**
     * HTTP method. (GET or POST)
     */
    type: "GET" | "POST";
    /**
     * The request URL.
     */
    url: string;
    /**
     * The payload to send (will be URL-encoded).
     */
    data?: Record<string, any>;
    /**
     * Determines if the request should be asynchronous (defaults to `true`).
     */
    async?: boolean;
    /**
     * The success callback. Receives the response text and the request object.
     * @param response The response text.
     * @param req The `XMLHttpRequest` object.
     */
    done?: (response: string, req: XMLHttpRequest) => void;
    /**
     * The error callback. Called if the AJAX request returns an error.
     * @param req The `XMLHttpRequest` object that failed.
     */
    error?: (req: XMLHttpRequest) => void;
}

/**
 * Makes an AJAX request using XMLHttpRequest.
 * @remarks URL-encodes the payload.
 * @param settings The AJAX settings.
 *
 * @example
 * Get the current users:
 * ```js
 * let
 * ```
 */
declare function ajaxRequest(settings: AjaxSettings): void;

/**
 * Removes the alpha (A) component from a set of pixels.
 * @param data The RGBA pixels to remove A from.
 * @returns An incompatible array that has the A values removed.
 */
declare function removeAlpha(data: number[]): number[];

/**
 * Gets every single coordinate pair within a rectangle (inclusive).
 * @param x1 X coordinate 1.
 * @param y1 Y coordinate 1.
 * @param x2 X coordinate 2.
 * @param y2 Y coordinate 2.
 * @returns Every coordinate pair in the rectangle.
 */
declare function getRange(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
): Point[];

declare type AssignedColors = [
    "#660066",
    "#003366",
    "#ff9900",
    "#ff0066",
    "#003300",
    "#ff0000",
    "#3a3a3a",
    "#006666",
    "#3399ff",
    "#3333ff",
    "#000000",
];

/**
 * Colors used in {@link assignColor} to assign colors to usernames.
 */
declare var colors: AssignedColors;

/**
 * Assigns a color to a specific string (or username) using a chaotic hash function.
 * @param username The username to assign a color to.
 * @returns The assigned color.
 */
declare function assignColor(username: string): AssignedColors[number];

/**
 * Trims whitespace characters from the start and end of an array. Can optionally collapse multiple consecutive whitespace characters. Can trim a secondary array in parallel.
 * @remarks Modifies arrays in-place. Whitespace characters are: tab, LF, vertical tab, CR, space, next line, non-breaking space.
 * @param str_array Array of strings/characters to trim
 * @param left Number of whitespace characters to trim from left.
 * @param right Number of whitespace characters to trim from right.
 * @param gaps If this is true, this will collapse every consecutive whitespace character into a single whitespace.
 * @param secondary_array Optional array that will be trimmed in parallel (same indices as the `str_array`)
 * @returns The trimmed `str_array`, which was also modified in-place.
 */
declare function spaceTrim(
    str_array: string[],
    left: number,
    right: number,
    gaps: boolean,
    secondary_array?: any[],
): string[];

/**
 * Splices multiple arrays at once. Can only remove.
 * @param array The arrays to splice.
 * @param A The start index.
 * @param B The remove count.
 */
declare function spliceArray(array: any[], A: number, B: number): void;

/**
 * Wrapper around `document.getElementById()`.
 * @param a The element ID.
 */
declare function byId(a: string): HTMLElement | null;

/**
 * Wrapper around `Date.now()`.
 */
declare function getDate(): number;

/**
 * Contains which keys are currently being pressed.
 */
declare var keydownTable: Record<string, 1>;
/**
 * Adds a key to the {@link keyDownTable} as it is pressed. Attached to an event listener.
 * @param e The keyboard event.
 */
declare function keydownTableDown(e: KeyboardEvent): void;
/**
 * Removes a key from the {@link keyDownTable} as it is depressed. Attached to an event listener.
 * @param e The keyboard event.
 */
declare function keydownTableUp(e: KeyboardEvent): void;

declare var elm: {
    /**
     * The DOM \<div\> element that contains the chatbox. A `display: none` style is appended when the chatbox is not open.
     */
    chat_window: HTMLDivElement | null;
    /**
     * The DOM \<div\> element that contains the button (\<span\> and an event listener) to open the chatbox. Its style is set to `display: none` once the chat is opened.
     */
    chat_open: HTMLDivElement | null;
    /**
     * The DOM \<button\> element that is the "Send" button in the chatbox.
     */
    chatsend: HTMLButtonElement | null;
    /**
     * The DOM \<input\> element that is used to type messages into the chatbox.
     */
    chatbar: HTMLInputElement | null;
    /**
     * The \<div\> that contains the close button for the chatbox.
     */
    chat_close: HTMLDivElement | null;
    /**
     * The \<div\> that contains the world (page) chat field. Its style is set to `display: none` when the chatbox is not currently focused on world chat.
     */
    page_chatfield: HTMLDivElement | null;
    /**
     * The \<div\> that contains the global chat field. Its style is set to `display: none` when the chatbox is not currently focused on global chat.
     */
    global_chatfield: HTMLDivElement | null;
    /**
     * The \<div\> that has the "This page" text and the number of unread messages indicated. This element has a "click" event listener attached.
     */
    chat_page_tab: HTMLDivElement | null;
    /**
     * The \<div\> that has the "Global" text and the number of unread messages indicated. This element has a "click" event listener attached.
     */
    chat_global_tab: HTMLDivElement | null;
    /**
     * The \<span\> that indicates how many clients are connected to your world.
     */
    usr_online: HTMLSpanElement | null;
    /**
     * The \<b\> element that indicates how many total messages were unread when the chatbox is closed.
     */
    total_unread: HTMLElement | null;
    /**
     * The \<b\> element that indicates how many messages were unread in world chat.
     */
    page_unread: HTMLElement | null;
    /**
     * The \<b\> element that indicates how many messages were unread in global chat.
     */
    global_unread: HTMLElement | null;
    /**
     * The upper bar header that contains the close button, the global and this page "buttons" and the user count.
     */
    chat_upper: HTMLDivElement | null;
    /**
     * The \<h1\> element that shows up when the website is loading. Hidden (`display: none`) after loading.
     */
    loading: HTMLHeadingElement | null;
    /**
     * The X coordinate that shows up when the "Show coordinates" option is ticked in the menu. "Coordinates" are 4 {@link Tiles | tiles} in width and height.
     */
    coord_Y: HTMLSpanElement | null;
    /**
     * The Y coordinate that shows up when the "Show coordinates" option is ticked in the menu. "Coordinates" are 4 {@link Tiles | tiles} in width and height.
     */
    coord_X: HTMLSpanElement | null;
    /**
     * The tile X coordinate that shows up when the coordinate box that appears after ticking "Show coordinates" is clicked.
     * @see {@link Tiles}
     */
    tile_Y: HTMLSpanElement | null;
    /**
     * The tile Y coordinate that shows up when the coordinate box that appears after ticking "Show coordinates" is clicked.
     * @see {@link Tiles}
     */
    tile_X: HTMLSpanElement | null;
    /**
     * The character X coordinate that shows up when the coordinate box that appears after ticking "Show coordinates" is clicked.
     * @see {@link Tiles}
     */
    char_Y: HTMLSpanElement | null;
    /**
     * The character Y coordinate that shows up when the coordinate box that appears after ticking "Show coordinates" is clicked.
     * @see {@link Tiles}
     */
    char_X: HTMLSpanElement | null;
    /**
     * This element doesn't exist. It is a leftover by FP.
     * @deprecated
     */
    color_input_form_input: null;
    /**
     * The \<div\> protection window that appears when you try to protect a specific tile/region.
     */
    protect_precision: HTMLDivElement | null;
    /**
     * The \<div\> erase-region window that appears when you try to erase a specific region.
     */
    erase_region: HTMLDivElement | null;
    /**
     * The \<div\> that contains many ui-vis class elements that show server-wide or script announcements.
     */
    announce_container: HTMLDivElement | null;
    /**
     * A clickable \<div\> that selects the "tile" protect type for the protection window.
     */
    tile_choice: HTMLDivElement | null;
    /**
     * A clickable \<div\> that selects the "character" protect type for the protection window.
     */
    char_choice: HTMLDivElement | null;
    /**
     * The "menu" dropdown box that contains most of OWOT's functions. Clickable via event listener.
     */
    menu_elm: HTMLSpanElement | null;
    /**
     * The \<div\> that contains the dropdown elements in a \<ul\> element.
     */
    nav_elm: HTMLDivElement | null;
    /**
     * The \<div\> that contains the coordinate box seen when enabling "Show coordinates".
     */
    coords: HTMLDivElement | null;
    /**
     * The \<div\> that contains the cursor coordinates (in {@link Tiles | tile} format).
     */
    cursor_coords: HTMLDivElement | null;
    /**
     * The actual cursor coordinates in the "Show coordinates" box. Styled as `display: none` when the cursor is not available.
     */
    cursor_on: HTMLSpanElement | null;
    /**
     * If the cursor coordinates are not available, this span, which always has a value of "N/A", loses its style of `display: none` and shows up in place of {@link elm.cursor_on | cursor_on}.
     */
    cursor_off: HTMLSpanElement | null;
    /**
     * The \<div\> that contains the "possibly untrusted JavaScript code" window. The `display: none` style is appended when the user has not opened any JavaScript links, and removed if they have.
     */
    confirm_js: HTMLDivElement | null;
    /**
     * This always has a value of "This is a snippet of possibly untrusted JavaScript code."
     * @see {@link elm.confirm_js}
     */
    confirm_js_msg: HTMLSpanElement | null;
    /**
     * This is the JavaScript code that is supposed to be reviewed before execution.
     * @see {@link elm.confirm_js}
     */
    confirm_js_code: HTMLSpanElement | null;
    /**
     * This always has a value of "Copy & Close". If this anchor is clicked, the window will close.
     * @see {@link elm.confirm_js}
     */
    confirm_js_copy: HTMLAnchorElement | null;
    /**
     * The \<div\> that contains the entire OWOT canvas.
     */
    main_view: HTMLDivElement | null;
    /**
     * The DOM <a> anchor element. It is used for user link clicks and changes the href upon hovering on a link.
     *
     * Upon hovering, it also changes the {@link linkParams} global variable to match the metadata of the hovered link.
     *
     * @example
     * Log to the console whenever a JavaScript link is clicked:
     * ```js
     * linkElm.addEventListener("click", () => {
     *   if(linkParams.protocol === "javascript") console.log(linkParams.protocol)
     * })
     */
    link_element: HTMLAnchorElement | null;
    /**
     * The DOM <div> element used to scale the linkElm to the same size as a cell (character) within the OWOT canvas.
     *
     * @example
     * Highlights the URL being hovered over.
     * ```js
     * linkDiv.style.background = `rgba(22, 208, 233, 0.5)`
     */
    link_div: HTMLDivElement | null;
    /**
     * The anchor element that starts selecting a protection area when clicked. It always says "Select",
     */
    protect_selection: HTMLAnchorElement | null;
    /**
     * When you press ALT+Q, this \<div\> shows up to give you a text decoration to use in your text. Styled `display: none` when the window is hidden.
     */
    text_decorations: HTMLDivElement | null;
    /**
     * The \<div\> that represents the bold text decoration.
     * @see {@link elm.text_decorations}
     */
    text_deco_b: HTMLDivElement | null;
    /**
     * The \<div\> that represents the italic text decoration.
     * @see {@link elm.text_decorations}
     */
    text_deco_i: HTMLDivElement | null;
    /**
     * The \<div\> that represents the underline text decoration.
     * @see {@link elm.text_decorations}
     */
    text_deco_u: HTMLDivElement | null;
    /**
     * The \<div\> that represents the strikethrough text decoration.
     * @see {@link elm.text_decorations}
     */
    text_deco_s: HTMLDivElement | null;
    /**
     * When erasing a region in your world, this radio button allows you to erase one region.
     */
    erase_region_once: HTMLInputElement | null;
    /**
     * When erasing a region in your world, this radio button allows you to erase multiple regions.
     */
    erase_region_mult: HTMLInputElement | null;
    /**
     * When erasing a region in your world, this radio button allows you to erase regions while holding Ctrl.
     */
    erase_region_ctrl: HTMLInputElement | null;
    /**
     * When erasing a region in your world, if this checkbox is ticked, erases will erase tiles instead of characters.
     */
    erase_region_snap: HTMLInputElement | null;
    /**
     * If you hover over a "note:message" URL link in OWOT, this tooltip will remove its `display: none` style and show the message embedded in the link.
     */
    link_tooltip: HTMLDivElement | null;
    /**
     * The OWOT canvas element.
     */
    owot: HTMLCanvasElement | null;
    /**
     * The OWOT text input element used for sending character data to the canvas.
     */
    textInput: HTMLTextAreaElement | null;
    [key: string]: HTMLElement | null;
};

/**
 * Adds elements to the {@link elm | global element reference dictionary}.
 * @param list The elements to add.
 */
declare function defineElements(list: Record<string, HTMLElement | null>): void;
