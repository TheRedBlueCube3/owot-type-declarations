/**
 * Permission levels used throughout OWOT.
 * - ADMIN: 2 - Only world owners
 * - MEMBERS: 1 - World members and owners
 * - PUBLIC: 0 - Anyone
 */
declare var PERM: {
    ADMIN: 2;
    MEMBERS: 1;
    PUBLIC: 0;
};
/**
 * A utility object for checking permissions on certain OWOT functions.
 */
declare var Permissions: {
    /**
     * Whether the user is the owner of the current world.
     * @param user The user to check.
     */
    can_admin: (user: UserModel) => boolean;
    /**
     * Whether the user can create coordinate links.
     * @param user The user to check.
     * @param world The world, whose properties will be used.
     */
    can_coordlink: (user: UserModel, world: WorldModel) => boolean;
    /**
     * Whether the user can create coordinate links.
     * @param user The user to check.
     * @param world The world, whose properties will be used.
     * @param tile The tile, protections mapped in a particular way. How this parameter works, is that it's an object with the keys (protections) `writability` and `char`.
     *
     * Sometimes `char` is undefined, in which case the whole tile is protected by the protection mentioned in `writability`. `char` is arranged linearly, and it too uses protections as its entries, but if the character turns out to be `null`, then it uses the `writability` protection.
     *
     * tileC is used for calculating the character index.
     *
     * Inheritance chain: if the character is null, tile writability is used. If the writability is null, the world's writabillity is used.
     * @param charX Character X inside the tile.
     * @param charY Character Y inside the tile.
     */
    can_edit_tile: (
        user: UserModel,
        world: WorldModel,
        tile: {
            writability: Protections | null;
            char: (Protections | null)[];
        },
        charX: number,
        charY: number,
    ) => boolean;
    /**
     * Whether the user can teleport to a different location.
     * @param user The user to check.
     * @param world The world, whose properties will be used.
     */
    can_go_to_coord: (user: UserModel, world: WorldModel) => boolean;
    /**
     * Whether the user can paste stuff.
     * @param user The user to check.
     * @param world The world, whose properties will be used.
     */
    can_paste: (user: UserModel, world: WorldModel) => boolean;
    /**
     * Whether the user can copy something.
     * @param user The user to check.
     * @param world The world, whose properties will be used.
     */
    can_copy: (user: UserModel, world: WorldModel) => boolean;
    /**
     * Whether the user can make tiles member-only.
     * @param user The user to check.
     * @param world The world, whose properties will be used.
     */
    can_protect_tiles: (user: UserModel, world: WorldModel) => boolean;
    /**
     * Whether the user can visit the world.
     * @param user The user to check.
     * @param world The world, whose properties will be used.
     */
    can_read: (user: UserModel, world: WorldModel) => boolean;
    /**
     * Whether the user can create URL links.
     * @param user The user to check.
     * @param world The world, whose properties will be used.
     */
    can_urllink: (user: UserModel, world: WorldModel) => boolean;
    /**
     * Whether the user can write to the world.
     * @param user The user to check.
     * @param world The world, whose properties will be used.
     */
    can_write: (user: UserModel, world: WorldModel) => boolean;
    /**
     * Whether the user can chat.
     * @param user The user to check.
     * @param world The world, whose properties will be used.
     */
    can_chat: (user: UserModel, world: WorldModel) => boolean;
    /**
     * Whether the user's cursor is visible.
     * @param user The user to check.
     * @param world The world, whose properties will be used.
     */
    can_show_cursor: (user: UserModel, world: WorldModel) => boolean;
    /**
     * Whether the user can write colored text.
     * @param user The user to check.
     * @param world The world, whose properties will be used.
     */
    can_color_text: (user: UserModel, world: WorldModel) => boolean;
    /**
     * Whether the user can write text with cell colors.
     * @param user The user to check.
     * @param world The world, whose properties will be used.
     */
    can_color_cell: (user: UserModel, world: WorldModel) => boolean;
    /**
     * Whether the user is limited and restricted to text color palettes. Used on frontpage as a means of adding colors back (during the color unban of 2026).
     * @param user The user to check.
     * @param world The world, whose properties will be used.
     */
    has_text_color_palette: (user: UserModel, world: WorldModel) => boolean;
    /**
     * Whether the user is limited and restricted to cell color palettes.
     * @param user The user to check.
     * @param world The world, whose properties will be used.
     */
    has_cell_color_palette: (user: UserModel, world: WorldModel) => boolean;
    /**
     * Whether the user is limited and restricted to any kind of color palette.
     * @param user The user to check.
     * @param world The world, whose properties will be used.
     */
    has_color_palette: (user: UserModel, world: WorldModel) => boolean;
    /**
     * Checks if the user matches a minimum permission.
     * @param user The user to check.
     * @param world The world, whose properties will be used.
     * @param perm The minimum permission level (-1 for disabled).
     * @returns If the user's model matches the minimum permissions.
     */
    user_matches_perm: (
        user: UserModel,
        world: WorldModel,
        perm: -1 | Permissions,
    ) => boolean;
};
