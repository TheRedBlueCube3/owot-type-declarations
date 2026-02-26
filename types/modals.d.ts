/**
 * Global modal overlay element that covers the page when modals are open.
 * Clicking on this overlay can close the current modal.
 */
declare var modalOverlay: HTMLElement;

/**
 * Internal flag tracking if the overlay itself was clicked (not its children).
 */
declare var modalOverlaySelected: boolean;

/**
 * Represents a checkbox item in a nested checkbox tree.
 */
declare interface ModalCheckboxItem {
    /** The label DOM element containing the checkbox. */
    elm: HTMLLabelElement;
    /** The actual checkbox input element. */
    cbElm: HTMLInputElement;
    /** Nested child checkboxes. */
    children: ModalCheckboxItem[];
    /** Indentation level (0 = root). */
    level?: number;
    /** Reference to the next sibling element for DOM insertion. */
    nextSibling?: Node;
}

/**
 * Context data stored for each tab in a modal.
 */
declare interface ModalTabContext {
    /** Unique identifier for the tab. */
    id: string;
    /** The tab button DOM element. */
    tabButton: HTMLDivElement;
    /** The client area DOM element for this tab. */
    client: HTMLDivElement;
    /** Input field container (for forms). */
    inputField: HTMLDivElement | null;
    /** Form title DOM element. */
    formTitle: HTMLDivElement | null;
    /** Form field container DOM element. */
    formField: HTMLDivElement | null;
    /** Array of form input entries. */
    formInputs: ModalFormEntry[];
    /** Checkbox field container. */
    cbField: HTMLDivElement | null;
    /** List of root checkbox items. */
    cbList: ModalCheckboxItem[];
    /** Checkbox callback function. */
    cbCallback: ((item: ModalCheckboxItem, checked: boolean) => void) | null;
}

/**
 * Represents a form input entry in a modal form.
 */
declare interface ModalFormEntry {
    /** The input DOM element. */
    input: HTMLInputElement;
    /** The current/stored value. */
    value: string;
    /** Validation type ('number', 'required', or undefined). */
    validation?: "number" | "required";
    /** Whether validation has failed. */
    validationFailed: boolean;
    /** Input type ('text', 'color', or undefined). */
    type?: "text" | "color";
    /** The label text. */
    label: string;
    /** The label DOM element. */
    labelElement: HTMLLabelElement;
}

/**
 * Options for setting form title styling.
 */
declare interface ModalTitleOptions {
    /** Whether to make the title bold. */
    bold?: boolean;
    /** Whether to center the title. */
    center?: boolean;
}

/**
 * Event data passed to tab change callbacks.
 */
declare interface ModalTabChangeEvent {
    /** ID of the tab that was focused. */
    id: string;
}

/**
 * Creates and manages modal dialog boxes.
 */
declare class Modal {
    /**
     * List of all modal instances.
     */
    static list: Modal[];

    /**
     * Whether any modal is currently open.
     */
    static isOpen: boolean;

    /**
     * The currently open modal instance.
     */
    static current: Modal | null;

    /**
     * Closes all open modals.
     */
    static closeAll(): void;

    /**
     * The main modal frame DOM element.
     */
    frame: HTMLDivElement;

    /**
     * The client area DOM element where content is placed.
     */
    client: HTMLDivElement;

    /**
     * The tab field DOM element containing tab buttons.
     */
    tabField: HTMLDivElement;

    /**
     * Input field container for forms.
     */
    inputField: HTMLDivElement | null;

    /**
     * Form title DOM element.
     */
    formTitle: HTMLDivElement | null;

    /**
     * Form field container DOM element.
     */
    formField: HTMLDivElement | null;

    /**
     * Array of form input entries.
     */
    formInputs: ModalFormEntry[];

    /**
     * Whether the form is hidden.
     */
    formHidden: boolean;

    /**
     * Footer container array [left, center, right].
     */
    footerCont: [HTMLDivElement, HTMLDivElement, HTMLDivElement] | [];

    /**
     * Footer field DOM element.
     */
    footerField: HTMLDivElement | null;

    /**
     * Whether the modal is currently open.
     */
    isOpen: boolean;

    /**
     * Whether the form has been submitted (prevents double submission).
     */
    hasSubmitted: boolean;

    /**
     * Submit callback function.
     */
    submitFn:
        | ((data: Record<string | number, string> & { length: number }) => void)
        | null;

    /**
     * Open callback function.
     */
    openFn: ((...params: any[]) => void) | null;

    /**
     * Close callback function.
     */
    closeFn: ((canceled?: boolean) => void) | null;

    /**
     * Tab change callback function.
     */
    tabChangeFn: ((event: ModalTabChangeEvent) => void) | null;

    /**
     * Checkbox field container.
     */
    cbField: HTMLDivElement | null;

    /**
     * List of root checkbox items.
     */
    cbList: ModalCheckboxItem[];

    /**
     * Checkbox callback function.
     */
    cbCallback: ((item: ModalCheckboxItem, checked: boolean) => void) | null;

    /**
     * List of tab contexts.
     */
    tabList: ModalTabContext[];

    /**
     * Index of tab contexts by ID.
     */
    tabIndex: Record<string, ModalTabContext>;

    /**
     * The currently active tab context.
     */
    currentTabCtx: ModalTabContext | null;

    /**
     * Creates a new Modal instance.
     */
    constructor();

    /**
     * Creates a form section in the modal.
     * Modals are limited to one form only.
     */
    createForm(): void;

    /**
     * Hides the existing form.
     */
    hideForm(): void;

    /**
     * Shows the existing form.
     */
    showForm(): void;

    /**
     * Validates, processes, and submits the form.
     * This triggers the onSubmit callback.
     */
    submitForm(): void;

    /**
     * Reverts the form values and closes the modal.
     * @param canceled Whether this is a cancellation
     */
    cancelForm(canceled?: boolean): void;

    /**
     * Lines up all form labels (labels on left, inputs on right).
     */
    alignForm(): void;

    /**
     * Sets each form label on its own line.
     */
    unalignForm(): void;

    /**
     * Adds an input entry to the form.
     * @param label The label to show next to the input
     * @param type Input type ('text' or 'color')
     * @param validation Validation type ('number' or 'required')
     * @returns The created form entry object
     */
    addEntry(
        label: string,
        type?: "text" | "color",
        validation?: "number" | "required",
    ): ModalFormEntry;

    /**
     * Removes an input entry from the form.
     * @param entryData The entry instance to remove
     */
    removeEntry(entryData: ModalFormEntry): void;

    /**
     * Appends content to the client area of the modal.
     * @param element The DOM element to append
     */
    appendContent(element: HTMLElement): void;

    /**
     * Sets the title or description at the top of the modal.
     * @param title The title text
     * @param opts Styling options
     */
    setFormTitle(title: string, opts?: ModalTitleOptions): void;

    /**
     * Sets the fixed size of the modal.
     * Any overflowing content will be hidden.
     * @param width Width in pixels (0 or undefined to reset)
     * @param height Height in pixels (0 or undefined to reset)
     */
    setSize(width?: number, height?: number): void;

    /**
     * Sets the minimum size of the modal.
     * The modal cannot be smaller than this size.
     * @param width Minimum width in pixels (0 or undefined to reset)
     * @param height Minimum height in pixels (0 or undefined to reset)
     */
    setMinimumSize(width?: number, height?: number): void;

    /**
     * Sets the maximum size of the modal.
     * The modal cannot be larger than this size.
     * @param width Maximum width in pixels (0 or undefined to reset)
     * @param height Maximum height in pixels (0 or undefined to reset)
     */
    setMaximumSize(width?: number, height?: number): void;

    /**
     * Adds a footer to the bottom of the modal.
     * The footer is split into three parts (left, center, right).
     */
    setFooter(): void;

    /**
     * Removes the footer from the modal.
     */
    removeFooter(): void;

    /**
     * Adds a checkbox to the left section of the footer.
     * @param labelName The checkbox label
     * @param callback Called when checkbox state changes
     * @param defaultState Initial checked state
     */
    setFooterCheckbox(
        labelName: string,
        callback?: (checked: boolean) => void,
        defaultState?: boolean,
    ): void;

    /**
     * Adds content to the left section of the footer.
     * @param data DOM element to add
     */
    setFooterContentLeft(data: HTMLElement): void;

    /**
     * Adds content to the center section of the footer.
     * @param data DOM element to add
     */
    setFooterContentCenter(data: HTMLElement): void;

    /**
     * Adds content to the right section of the footer.
     * @param data DOM element to add
     */
    setFooterContentRight(data: HTMLElement): void;

    /**
     * Clears the left section of the footer.
     */
    removeFooterContentLeft(): void;

    /**
     * Clears the center section of the footer.
     */
    removeFooterContentCenter(): void;

    /**
     * Clears the right section of the footer.
     */
    removeFooterContentRight(): void;

    /**
     * Creates a checkbox section in the modal.
     * The checkbox section contains a nestable list of checkbox inputs.
     * Only one checkbox field is currently supported.
     */
    createCheckboxField(): void;

    /**
     * Adds a checkbox to the checkbox field.
     * @param label The checkbox label
     * @param parent Parent checkbox for nesting
     * @returns The created checkbox item
     */
    addCheckbox(label: string, parent?: ModalCheckboxItem): ModalCheckboxItem;

    /**
     * Inserts a new tab to the modal along with a new client area.
     * If no tab exists, the current client area becomes part of the first tab.
     * @param id Unique identifier for the tab
     * @param title Display title for the tab button
     */
    addTab(id: string, title: string): void;

    /**
     * Makes the tab the current visible tab.
     * @param id ID of the tab to focus
     */
    focusTab(id: string): void;

    /**
     * Returns the ID of the currently active tab.
     * @returns Tab ID or null if no tabs
     */
    getCurrentTabId(): string | null;

    /**
     * Hides a tab from the tab bar.
     * @param id ID of the tab to hide
     */
    hideTab(id: string): void;

    /**
     * Shows a previously hidden tab.
     * @param id ID of the tab to show
     */
    showTab(id: string): void;

    /**
     * Returns raw tab data for a given ID.
     * @param id Tab ID
     * @returns Tab context or null if not found
     */
    getTabData(id: string): ModalTabContext | null;

    /**
     * Appends content to the modal's client area.
     * @param elm DOM element to append
     */
    append(elm: HTMLElement): void;

    /**
     * Adds a "Close" caption to the bottom right of the modal.
     */
    createClose(): void;

    // ==================== EVENT CALLBACKS ====================

    /**
     * Sets the callback for form submission.
     * @param callback Function called with form data
     */
    onSubmit(
        callback: (
            data: Record<string | number, string> & { length: number },
        ) => void,
    ): void;

    /**
     * Sets the callback for when the modal opens.
     * @param callback Function called with any open parameters
     */
    onOpen(callback: (...params: any[]) => void): void;

    /**
     * Sets the callback for when the modal closes.
     * @param callback Function called with canceled flag
     */
    onClose(callback: (canceled?: boolean) => void): void;

    /**
     * Sets the callback for checkbox field input.
     * @param callback Function called with checkbox item and checked state
     */
    checkboxFieldOnInput(
        callback: (item: ModalCheckboxItem, checked: boolean) => void,
    ): void;

    /**
     * Sets the callback for tab changes.
     * @param callback Function called with tab change event
     */
    onTabChange(callback: (event: ModalTabChangeEvent) => void): void;

    /**
     * Displays the modal.
     * @param params Parameters passed to the onOpen callback
     */
    open(...params: any[]): void;

    /**
     * Hides the modal.
     * @param canceled Whether this close is due to cancellation
     */
    close(canceled?: boolean): void;
}

/**
 * Updates checkbox states in a nested checkbox tree based on parent state.
 * @param list List of checkbox items to update
 * @param parent Parent checkbox item (if any)
 */
declare function updateModalCheckboxField(
    list: ModalCheckboxItem[],
    parent?: ModalCheckboxItem,
): void;
