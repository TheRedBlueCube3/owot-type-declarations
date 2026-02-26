/**
 * The world and user model state.
 */
declare var state: {
    /**
     * The user model.
     */
    userModel: UserModel;
    /**
     * The world model.
     */
    worldModel: WorldModel;
};

interface UserModel {
    /**
     * Your Uvias username.
     */
    username: string;
    /**
     * Whether you are a superuser in OWOT.
     */
    is_superuser: boolean;
    /**
     * Whether you are Uvias-authenticated.
     */
    authenticated: boolean;
    /**
     * Whether you are a member on the current world.
     */
    is_member: boolean;
    /**
     * Whether you are the owner of the current world.
     */
    is_owner: boolean;
    /**
     * Whether you are server staff.
     */
    is_staff: boolean;
    /**
     * Whether you are a server operator.
     */
    is_operator: boolean;
}

interface WorldModel {
    /**
     * The background (cell) color palette. Uses 0xrrggbb colors.
     */
    bg_color_palette: number[] | null;
    /**
     * The character rate limit (chars/ms).
     */
    char_rate: [number, number];
    /**
     * Which permission level (minimum) can send chat messages.
     */
    chat_permission: Protections;
    /**
     * Which permission level (minimum) can apply cell colors. -1 for disabled.
     */
    color_cell: -1 | Protections;
    /**
     * A limited character color palette. Uses 0xrrggbb colors.
     */
    color_palette: number[] | null;
    /**
     * Which permission level (minimum) can apply character colors.
     */
    color_text: Protections;
    /**
     * Which permission level (minimum) can apply coordinate links.
     */
    feature_coord_link: Protections;
    /**
     * Which permission level (minimum) can go to any given coordinates.
     */
    feature_go_to_coord: Protections;
    /**
     * Which permission level (minimum) can create members-only areas.
     */
    feature_membertiles_addremove: boolean;
    /**
     * Which permission level (minimum) can paste text.
     */
    feature_paste: Protections;
    /**
     * Which permission level (minimum) can apply URL links.
     */
    feature_url_link: Protections;
    /**
     * The world name.
     */
    name: string;
    /**
     * Whether the Global tab is disabled in chat.
     */
    no_chat_global: boolean;
    /**
     * Whether the text copying is limited.
     */
    no_copy: boolean;
    /**
     * The world URL path name.
     */
    pathname: string;
    /**
     * Which permission level (minimum) can rapidly erase areas.
     */
    quick_erase: Protections;
    /**
     * Which permission level (minimum) can visit this world.
     */
    readabillity: Protections;
    /**
     * Which permission level (minimum) can have its cursor shown. -1 for disabled.
     */
    show_cursor: -1 | Protections;
    /**
     * Which permission level (minimum) is the protection level for every tile.
     */
    writability: Protections;
    /**
     * The default write interval.
     */
    write_interval: number;
}

/**
 * Replacement for booleans. 0 - false, 1 - true.
 */
type NumBoolean = 0 | 1;