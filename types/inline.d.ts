function isMainPage(name: string): name is "" | "main" | "owot";
declare var state: {
    userModel: {
        username: string;
        is_superuser: boolean;
        authenticated: boolean;
        is_member: boolean;
        is_owner: boolean;
        is_staff: boolean;
        is_operator: boolean;
    };
    worldModel: {
        bg_color_palette: number[] | null;
        char_rate: [number, number];
        chat_permission: Protections;
        color_cell: Protections;
        color_palette: number[] | null;
        color_text: Protections;
        feature_coord_link: Protections;
        feature_go_to_coord: Protections;
        feature_membertiles_addremove: boolean;
        feature_paste: Protections;
        feature_url_link: Protections;
        name: string;
        no_chat_global: boolean;
        no_copy: boolean;
        pathname: string;
        quick_erase: Protections;
        readabillity: Protections;
        show_cursor: -1 | Protections;
        writability: Protections;
        write_interval: number;
    }
};

type NumBoolean = 0 | 1;