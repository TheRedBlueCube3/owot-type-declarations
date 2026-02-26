/**
 * Represents a menu entry/item in the dropdown.
 */
declare interface MenuEntry {
    /** The DOM element for this menu entry (usually an <li>) */
    element: HTMLLIElement;
    /** The content of the entry (can be string or HTMLElement) */
    content: string | HTMLElement;
}

/**
 * A dropdown menu system.
 */
declare class Menu {
    /**
     * The title/button element that toggles the menu.
     */
    titleEl: HTMLElement;

    /**
     * The menu container element that shows/hides.
     */
    menuEl: HTMLElement;

    /**
     * The pin indicator element.
     */
    pinEl: HTMLElement | null;

    /**
     * Animation speed in milliseconds.
     */
    _SPEED: number;

    /**
     * Array of menu entries in order.
     */
    entries: MenuEntry[];

    /**
     * Whether the menu is pinned (stays open after hovering away from it).
     */
    pinned: boolean;

    /**
     * Whether the menu is currently visible.
     */
    visible: boolean;

    /**
     * Last used entry ID for generating unique IDs.
     */
    lastEntryId: number;

    /**
     * Map of entry IDs to MenuEntry objects.
     */
    entriesById: Record<number, MenuEntry>;

    /**
     * Flag to cancel pending hide operation.
     */
    cancelHide: boolean;

    /**
     * Creates a new Menu instance.
     * @param titleEl The element that toggles the menu (usually a button/title)
     * @param menuEl The menu container element that slides in/out
     */
    constructor(titleEl: HTMLElement, menuEl: HTMLElement);

    /**
     * Adds a simple clickable option to the menu.
     * @param text The text to display
     * @param action Function to call when clicked
     * @returns The ID of the new entry
     */
    addOption(text: string, action: () => void): number;

    /**
     * Adds a checkbox option to the menu.
     * @param text The text to display (leading space is trimmed)
     * @param checkedAction Function to call when checked
     * @param uncheckedAction Function to call when unchecked
     * @param checked Initial checked state
     * @returns The ID of the new entry
     */
    addCheckboxOption(
        text: string,
        checkedAction: () => void,
        uncheckedAction: () => void,
        checked?: boolean,
    ): number;

    /**
     * Immediately hides the menu (if not pinned).
     */
    hideNow(): void;

    /**
     * Schedules the menu to hide after a delay (unless canceled).
     */
    hide(): void;

    /**
     * Shows the menu.
     */
    show(): void;

    /**
     * Gets the container for new entries (creates <li> if needed).
     * @returns A <li> element or null if no container found
     */
    getEntryContainer(): HTMLLIElement | null;

    /**
     * Adds a custom entry to the menu.
     * @param liContents String HTML or HTMLElement to add
     * @returns The ID of the new entry
     * @throws {Error} If entry container cannot be found
     */
    addEntry(liContents: string | HTMLElement): number;

    /**
     * Hides a specific menu entry by ID.
     * @param id The entry ID
     */
    hideEntry(id: number): void;

    /**
     * Shows a specific menu entry by ID.
     * @param id The entry ID
     */
    showEntry(id: number): void;

    /**
     * Sets the visibility of a specific menu entry.
     * @param id The entry ID
     * @param visible - Whether the entry should be visible
     */
    setEntryVisibility(id: number, visible: boolean): void;

    /**
     * Moves an entry to the end of the menu.
     * @param id The entry ID
     * @throws {Error} If entry container not found
     */
    moveEntryLast(id: number): void;

    /**
     * Pins the menu (keeps it open and shows pin indicator).
     */
    pin(): void;

    /**
     * Unpins the menu.
     * @param noHide If true, don't hide the menu after unpinning
     */
    unpin(noHide?: boolean): void;
}

/**
 * Current animation state of the menu.
 * - "up": Menu is collapsed
 * - "down": Menu is expanded
 */
declare var menuAnimationState: "up" | "down";

/**
 * Whether a menu animation is currently in progress.
 */
declare var menuAnimationActive: boolean;

/**
 * Slides a menu element in a specified direction with animation.
 * @param direction "up" to hide, "down" to show
 * @param element The menu element to animate
 * @param speed Animation duration in milliseconds
 */
declare function slideMenu(
    direction: "up" | "down",
    element: HTMLElement,
    speed: number,
): void;

/**
 * Easing function for smooth animations.
 * @param t Current time
 * @param b Start value
 * @param c Change in value
 * @param d Duration
 * @returns Eased value
 */
declare function easeOutQuad(
    t: number,
    b: number,
    c: number,
    d: number,
): number;
