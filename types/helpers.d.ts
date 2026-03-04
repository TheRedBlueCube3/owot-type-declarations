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

/**
 * Makes an AJAX request using XMLHttpRequest.
 * @remarks URL-encodes the payload.
 * @param settings The AJAX settings.
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

// browser compensation
/**
 * The DOM \<div\> element that contains the chatbox. A `display: none` style is appended when the chatbox is not open.
 */
declare var chat_window: HTMLDivElement | null;
/**
 * The DOM \<div\> element that contains the button (\<span\> and an event listener) to open the chatbox. Its style is set to `display: none` once the chat is opened.
 */
declare var chat_open: HTMLDivElement | null;
/**
 * The DOM \<button\> element that is the "Send" button in the chatbox.
 */
declare var chatsend: HTMLButtonElement | null;
/**
 * The DOM \<input\> element that is used to type messages into the chatbox.
 */
declare var chatbar: HTMLInputElement | null;
/**
 * The \<div\> that contains the close button for the chatbox.
 */
declare var chat_close: HTMLDivElement | null;
/**
 * The \<div\> that contains the world (page) chat field. Its style is set to `display: none` when the chatbox is not currently focused on world chat.
 */
declare var page_chatfield: HTMLDivElement | null;
/**
 * The \<div\> that contains the global chat field. Its style is set to `display: none` when the chatbox is not currently focused on global chat.
 */
declare var global_chatfield: HTMLDivElement | null;
/**
 * The \<div\> that has the "This page" text and the number of unread messages indicated. This element has a "click" event listener attached.
 */
declare var chat_page_tab: HTMLDivElement | null;
/**
 * The \<div\> that has the "Global" text and the number of unread messages indicated. This element has a "click" event listener attached.
 */
declare var chat_global_tab: HTMLDivElement | null;
/**
 * The \<span\> that indicates how many clients are connected to your world.
 */
declare var usr_online: HTMLSpanElement | null;
/**
 * The \<b\> element that indicates how many total messages were unread when the chatbox is closed.
 */
declare var total_unread: HTMLElement | null;
/**
 * The \<b\> element that indicates how many messages were unread in world chat.
 */
declare var page_unread: HTMLElement | null;
/**
 * The \<b\> element that indicates how many messages were unread in global chat.
 */
declare var global_unread: HTMLElement | null;
/**
 * The upper bar header that contains the close button, the global and this page "buttons" and the user count.
 */
declare var chat_upper: HTMLDivElement | null;
/**
 * The \<h1\> element that shows up when the website is loading. Hidden (`display: none`) after loading.
 */
declare var loading: HTMLHeadingElement | null;
/**
 * The X coordinate that shows up when the "Show coordinates" option is ticked in the menu. "Coordinates" are 4 {@link Tiles | tiles} in width and height.
 */
declare var coord_Y: HTMLSpanElement | null;
/**
 * The Y coordinate that shows up when the "Show coordinates" option is ticked in the menu. "Coordinates" are 4 {@link Tiles | tiles} in width and height.
 */
declare var coord_X: HTMLSpanElement | null;
/**
 * The tile X coordinate that shows up when the coordinate box that appears after ticking "Show coordinates" is clicked.
 * @see {@link Tiles}
 */
declare var tile_Y: HTMLSpanElement | null;
/**
 * The tile Y coordinate that shows up when the coordinate box that appears after ticking "Show coordinates" is clicked.
 * @see {@link Tiles}
 */
declare var tile_X: HTMLSpanElement | null;
/**
 * The character X coordinate that shows up when the coordinate box that appears after ticking "Show coordinates" is clicked.
 * @see {@link Tiles}
 */
declare var char_Y: HTMLSpanElement | null;
/**
 * The character Y coordinate that shows up when the coordinate box that appears after ticking "Show coordinates" is clicked.
 * @see {@link Tiles}
 */
declare var char_X: HTMLSpanElement | null;
/**
 * This element doesn't exist. It is a leftover by FP.
 * @deprecated
 */
declare var color_input_form_input: null;
/**
 * The \<div\> protection window that appears when you try to protect a specific tile/region.
 */
declare var protect_precision: HTMLDivElement | null;
/**
 * The \<div\> erase-region window that appears when you try to erase a specific region.
 */
declare var erase_region: HTMLDivElement | null;
/**
 * The \<div\> that contains many ui-vis class elements that show server-wide or script announcements.
 */
declare var announce_container: HTMLDivElement | null;
/**
 * A clickable \<div\> that selects the "tile" protect type for the protection window.
 */
declare var tile_choice: HTMLDivElement | null;
/**
 * A clickable \<div\> that selects the "character" protect type for the protection window.
 */
declare var char_choice: HTMLDivElement | null;
/**
 * The "menu" dropdown box that contains most of OWOT's functions. Clickable via event listener.
 */
declare var menu_elm: HTMLSpanElement | null;
/**
 * The \<div\> that contains the dropdown elements in a \<ul\> element.
 */
declare var nav_elm: HTMLDivElement | null;
/**
 * The \<div\> that contains the coordinate box seen when enabling "Show coordinates".
 */
declare var coords: HTMLDivElement | null;
/**
 * The \<div\> that contains the cursor coordinates (in {@link Tiles | tile} format).
 */
declare var cursor_coords: HTMLDivElement | null;
/**
 * The actual cursor coordinates in the "Show coordinates" box. Styled as `display: none` when the cursor is not available.
 */
declare var cursor_on: HTMLSpanElement | null;
/**
 * If the cursor coordinates are not available, this span, which always has a value of "N/A", loses its style of `display: none` and shows up in place of {@link elm.cursor_on | cursor_on}.
 */
declare var cursor_off: HTMLSpanElement | null;
/**
 * The \<div\> that contains the "possibly untrusted JavaScript code" window. The `display: none` style is appended when the user has not opened any JavaScript links, and removed if they have.
 */
declare var confirm_js: HTMLDivElement | null;
/**
 * This always has a value of "This is a snippet of possibly untrusted JavaScript code."
 * @see {@link elm.confirm_js}
 */
declare var confirm_js_msg: HTMLSpanElement | null;
/**
 * This is the JavaScript code that is supposed to be reviewed before execution.
 * @see {@link elm.confirm_js}
 */
declare var confirm_js_code: HTMLSpanElement | null;
/**
 * This always has a value of "Copy & Close". If this anchor is clicked, the window will close.
 * @see {@link elm.confirm_js}
 */
declare var confirm_js_copy: HTMLAnchorElement | null;
/**
 * The \<div\> that contains the entire OWOT canvas.
 */
declare var main_view: HTMLDivElement | null;
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
declare var link_element: HTMLAnchorElement | null;
/**
 * The DOM <div> element used to scale the linkElm to the same size as a cell (character) within the OWOT canvas.
 *
 * @example
 * Highlights the URL being hovered over.
 * ```js
 * linkDiv.style.background = `rgba(22, 208, 233, 0.5)`
 */
declare var link_div: HTMLDivElement | null;
/**
 * The anchor element that starts selecting a protection area when clicked. It always says "Select",
 */
declare var protect_selection: HTMLAnchorElement | null;
/**
 * When you press ALT+Q, this \<div\> shows up to give you a text decoration to use in your text. Styled `display: none` when the window is hidden.
 */
declare var text_decorations: HTMLDivElement | null;
/**
 * The \<div\> that represents the bold text decoration.
 * @see {@link elm.text_decorations}
 */
declare var text_deco_b: HTMLDivElement | null;
/**
 * The \<div\> that represents the italic text decoration.
 * @see {@link elm.text_decorations}
 */
declare var text_deco_i: HTMLDivElement | null;
/**
 * The \<div\> that represents the underline text decoration.
 * @see {@link elm.text_decorations}
 */
declare var text_deco_u: HTMLDivElement | null;
/**
 * The \<div\> that represents the strikethrough text decoration.
 * @see {@link elm.text_decorations}
 */
declare var text_deco_s: HTMLDivElement | null;
/**
 * When erasing a region in your world, this radio button allows you to erase one region.
 */
declare var erase_region_once: HTMLInputElement | null;
/**
 * When erasing a region in your world, this radio button allows you to erase multiple regions.
 */
declare var erase_region_mult: HTMLInputElement | null;
/**
 * When erasing a region in your world, this radio button allows you to erase regions while holding Ctrl.
 */
declare var erase_region_ctrl: HTMLInputElement | null;
/**
 * When erasing a region in your world, if this checkbox is ticked, erases will erase tiles instead of characters.
 */
declare var erase_region_snap: HTMLInputElement | null;
/**
 * If you hover over a "note:message" URL link in OWOT, this tooltip will remove its `display: none` style and show the message embedded in the link.
 */
declare var link_tooltip: HTMLDivElement | null;
/**
 * The OWOT canvas element.
 */
declare var owot: HTMLCanvasElement | null;
/**
 * The OWOT text input element used for sending character data to the canvas.
 */
declare var textInput: HTMLTextAreaElement | null;

/**
 * Adds elements to the {@link elm | global element reference dictionary}.
 * @param list The elements to add.
 */
declare function defineElements(list: Record<string, HTMLElement | null>): void;

/**
 * Keyboard keycodes. Used in {@link getKeyCode}.
 */
declare var keyCodeTbl: {
    BACKSPACE: 8;
    TAB: 9;
    ENTER: 13;
    SHIFTRIGHT: 16;
    CONTROLLEFT: 17;
    CAPSLOCK: 20;
    ESCAPE: 27;
    SPACE: 32;
    PAGEUP: 33;
    PAGEDOWN: 34;
    END: 35;
    HOME: 36;
    ARROWLEFT: 37;
    ARROWUP: 38;
    ARROWRIGHT: 39;
    ARROWDOWN: 40;
    DELETE: 46;
    DIGIT0: 48;
    DIGIT1: 49;
    DIGIT2: 50;
    DIGIT3: 51;
    DIGIT4: 52;
    DIGIT5: 53;
    DIGIT6: 54;
    DIGIT7: 55;
    DIGIT8: 56;
    DIGIT9: 57;
    KEYA: 65;
    KEYB: 66;
    KEYC: 67;
    KEYD: 68;
    KEYE: 69;
    KEYF: 70;
    KEYG: 71;
    KEYH: 72;
    KEYI: 73;
    KEYJ: 74;
    KEYK: 75;
    KEYL: 76;
    KEYM: 77;
    KEYN: 78;
    KEYO: 79;
    KEYP: 80;
    KEYQ: 81;
    KEYR: 82;
    KEYS: 83;
    KEYT: 84;
    KEYU: 85;
    KEYV: 86;
    KEYW: 87;
    KEYX: 88;
    KEYY: 89;
    KEYZ: 90;
    CONTEXTMENU: 93;
    NUMPAD0: 96;
    NUMPAD1: 97;
    NUMPAD2: 98;
    NUMPAD3: 99;
    NUMPAD4: 100;
    NUMPAD5: 101;
    NUMPAD6: 102;
    NUMPAD7: 103;
    NUMPAD8: 104;
    NUMPAD9: 105;
    NUMPADMULTIPLY: 106;
    NUMPADADD: 107;
    NUMPADSUBTRACT: 109;
    NUMPADDECIMAL: 110;
    NUMPADDIVIDE: 111;
    F1: 112;
    F2: 113;
    F3: 114;
    F4: 115;
    F5: 116;
    F6: 117;
    F7: 118;
    F8: 119;
    F9: 120;
    F10: 121;
    F11: 122;
    F12: 123;
    SEMICOLON: 186;
    COMMA: 188;
    MINUS: 189;
    PERIOD: 190;
    SLASH: 191;
    BACKQUOTE: 192;
    BRACKETLEFT: 219;
    BACKSLASH: 220;
    BRACKETRIGHT: 221;
    QUOTE: 222;
};

/**
 * Maps modern code strings to legacy keycodes.
 * @param e The event to get the key code of.
 */
declare function getKeyCode(e: KeyboardEvent): KeyCode;

/**
 * Escapes a string by adding backslashes. It escapes `"`, `'` and `\`.
 * @param text The text to escape.
 */
declare function escapeQuote(text: string): string;

/**
 * Escapes a URL using the {@link escapeQuote} function.
 * @param url The URL to escape.
 */
declare function escapeURLQuote(url: string): string | "";

/**
 * Extracts a position out of a string like "x,y".
 * @param ref The string to extract a position from.
 */
declare function getPos(ref: YXStringPoint): Point;

/**
 * Offsets every tile coordinate in `data` by the specified amount.
 * @param data The tile data to offset.
 * @param tileOffX The tile offset X.
 * @param tileOffY The tile offset Y.
 */
declare function tile_offset_object(
    data: { [key: string]: any },
    tileOffX: number,
    tileOffY: number,
): void;

/**
 * Escapes a string to be safe with HTML.
 * @param str The string to escape.
 * @param non_breaking_space Whether to replace spaces with \&nbsp;
 * @param newline_br Whether to replace newlines with \<br\>.
 */
declare function html_tag_esc(
    str: string,
    non_breaking_space: boolean,
    newline_br: boolean,
): string;

/**
 * Checks if a string is hexadecimal (base-16).
 * @param str The string to check.
 */
declare function isHexString(str: string): str is HexString;

/**
 * Converts a Unix epoch time into a readable date and time.
 * @param epoch The Unix time to convert.
 */
declare function convertToDate(epoch: number): string;

/**
 * Converts a 0xrrggbb color to a [r,g,b] array.
 * @param value The color to convert.
 */
declare function int_to_rgb(value: number): RGBArray;

/**
 * Converts an 0xrrggbb color to a hex code.
 * @param value The color to convert.
 */
declare function int_to_hexcode(value: number): string;

/**
 * A circular buffer (ring buffer) that maintains a fixed length.
 * @template T The type of elements stored in the buffer.
 */
declare class CircularBuffer<T> {
    /**
     * Maximum length of the buffer.
     */
    len: number;
    /**
     * The buffer which contains the actual buffer elements.
     */
    buffer: (T | undefined)[];
    /**
     * The current write position.
     */
    pos: number;
    /**
     * Number of stored elements.
     */
    elms: number;
    /**
     * Creates a circular buffer (ring buffer) that maintains a fixed length.
     * @param maxLen The maximum length of the buffer.
     */
    constructor(maxLen: number);

    /**
     * Adds data to the buffer.
     * @param data The data to add.
     */
    push(data: T): void;
    /**
     * Removes (pops) and returns the last added element from the buffer.
     * @returns The popped element.
     */
    pop(): T | undefined;
    /**
     * Restores the most recently popped element.
     * @remarks Does nothing if buffer is full or no element to restore.
     * @returns The restored element.
     */
    unpop(): T | undefined;
    /**
     * Removes undefined elements from the buffer.
     */
    trim(): void;
    /**
     * Returns an array of all elements in the buffer, in FIFO order (from oldest to newest).
     * @returns The oldest-to-newest array.
     */
    unwind(): T[];
    /**
     * Returns the most recently added element without removing it.
     * @returns The most recent element.
     */
    top(): T | undefined;
}

/**
 * The links that are considered safe to open by default.
 */
declare var safeLinkHosts: SafeLinkHost[];

/**
 * Gets a domain's hostname.
 * @param host The domain to take a hostname from.
 */
declare function getBasicHostname(host: string): string;

/**
 * Checks if a hostname is safe to open (is included in {@link safeLinkHosts}).
 * @param host The hostname to check.
 */
declare function isSafeHostname(host: string): host is SafeLinkHost;

/**
 * @deprecated For compatibility.
 */
declare var blankColor: FixedLengthArray<number, 128>;

/**
 * A wrapper around WebSocket that automatically reconnects.
 */
declare class ReconnectingWebSocket {
    /**
     * The binary data type used by the connection.
     */
    binaryType: BinaryType;
    /**
     * After a disconnect, after this much time (in milliseconds), the socket would try to reconnect to the same URL specified in the constructor.
     */
    reconnectTimeout: number;
    /**
     * The underlying WebSocket.
     */
    socket: WebSocket;

    /**
     * Called when the connection is successfully opened.
     */
    onopen: ((ev: Event) => any) | null;
    /**
     * Called when the connection is closed.
     */
    onclose: ((ev: CloseEvent) => any) | null;
    /**
     * Called when a message is received from the server.
     */
    onmessage: ((ev: MessageEvent) => any) | null;
    /**
     * Called when a socket error occurs.
     */
    onerror: ((ev: Event) => any) | null;

    /**
     * Creates a new ReconnectingWebSocket.
     * @param url The WebSocket URL to connect to.
     */
    constructor(url: string);

    /**
     * Sends data through the WebSocket connection.
     * @param data The data to send.
     */
    send(data: string | ArrayBuffer | Blob | ArrayBufferView): void;
    /**
     * Closes the WebSocket connection permanently.
     */
    close(): void;
    /**
     * Reconnects the WebSocket.
     */
    refresh(): void;
}

/**
 * Splits a string into an array of visible characters (grapheme clusters).
 * @param str The string to split.
 * @param noSurrog If this is true, surrogates are split.
 * @param noComb If this is true, combining characters are split.
 * @param norm If this is true, combining ranges are treated as normal characters.
 * @returns The split array.
 */
declare function advancedSplit(
    str: string | string[],
    noSurrog?: boolean,
    noComb?: boolean,
    norm?: boolean,
): string[];

/**
 * Filters out "advanced" characters (combining and surrogate characters) based on parameters.
 * @param array The array of characters to filter.
 * @param noSurrogates If this is true, surrogate-using characters are replaced with "?".
 * @param noCombining If this is true, the characters lose their diacritics.
 * @returns The filtered array.
 */
declare function filterAdvancedChars(
    array: string[],
    noSurrogates: boolean,
    noCombining: boolean,
): string[];

declare interface wGlobals {
    /**
     * Dynamically loads a remote script and adds it to the DOM.
     * @param url The URL of the script to load.
     * @param callback The callback to call when the script is loaded.
     */
    loadScript(url: string, callback: (ev: Event) => void): void;
    /**
     * Dynamically loads a remote script and adds it to the DOM.
     * @param url The URL of the script to load.
     * @param sync Synchronously loads the script instead of asynchronously adding a callback.
     */
    loadScript(url: string, sync: true): void;
    /**
     * Clipboard utilities for copying text to the system clipboard.
     */
    clipboard: {
        /**
         * The textarea element used for clipboard operations.
         * Created by {@link w.clipboard.init}.
         */
        textarea: HTMLTextAreaElement | null;
        /**
         * Initializes the clipboard by adding a textarea to the DOM. Must be called before using {@link w.clipboard.copy}.
         */
        init: () => void;
        /**
         * Copies a string into the system clipboard.
         * @param string The string to copy into the clipboard.
         */
        copy: (string: string) => void;
    };
    /**
     * Event listener storage. Maps event names to callback function arrays.
     */
    events: Record<string, ((data: any) => void)[]>;
    /**
     * Registers an event listener for a specific event type.
     * @param type The event type to listen for (case-insensitive).
     * @param call The callback to call when the event is emitted.
     */
    on(type: string, call: (data: any) => void): void;
    /**
     * Removes an event listener from a specific event type. Removes all occurrences of the specified callback function.
     * @param type The event type to remove a listener from (case-insensitive).
     * @param call The exact callback to remove.
     */
    off(type: string, call: (data: any) => void): void;
    /**
     * Emits an event, calling all registered callbacks with the provided data.
     * @param type The event type to emit (case-insensitive).
     * @param data Data to pass to the event listeners (callbacks).
     */
    emit(type: string, data: any): void;
    /**
     * Determines if an event type has listeners.
     * @param type The event type to check for.
     */
    listening(type: string): boolean;
    /**
     * Alias for {@link advancedSplit}.
     */
    split: typeof advancedSplit;
}

/**
 * A utility object containing various helper functions, and an event system. Contrary to how it appears, this is NOT an EventEmitter inherit.
 * @alias OWOT
 */
declare var w: wGlobals;

/**
 * Another name for {@link w}.
 */
declare var OWOT: typeof w;
