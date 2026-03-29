declare var tilePixelCache: { [key: StringPoint]: CachedTile };
declare var tileCanvasPool: TilePool[];
declare var renderQueue: Point[];
declare var renderQueueMap: Map<StringPoint, true>;
declare var canBypassRenderDefer: boolean;
declare var renderSerial: number;

declare function isTileQueued(x: number, y: number): boolean;
declare function queueTile(x: number, y: number, highPriority: boolean): void;

declare function createTilePool(): TilePool;

declare function expandPool(pool: TilePool): void;

declare function locateAvailablePool(): AvailablePool;

declare function allocateTile(): CachedTile;

declare function deallocateTile(obj: CachedTile): void;

declare function reallocateTile(obj: CachedTile): CachedTile;

declare function deletePool(pool: TilePool): void;

declare function deleteEmptyPools(): void;

declare function deleteAllPools(): void;

declare function countTotalPoolPixels(): number;

declare function cleanupDirtyTiles(): void;

declare function markTileFromPoolAsEmpty(tileX: number, tileY: number): void;

declare function loadTileFromPool(
    tileX: number,
    tileY: number,
    doNotCreate: boolean,
): CachedTile;

declare function shiftAllTilesInPools(): void;

declare function removeTileFromPool(tileX: number, tileY: number): void;

declare function removeAllTilesFromPools(): void;

declare function getPoolDimensions(tileWidth: number, tileHeight: number);

declare function getTileCoordsFromMouseCoords(x: number, y: number);

declare function getTileScreenPosition(tileX: number, tileY: number): Point;

declare function getVisibleTileRange(margin: number): [Point, Point];

declare function getVisibleTiles(margin: number): Point[];

declare function getWidth(margin: number): number;
declare function getHeight(margin: number): number;
declare function getArea(margin: number): number;

declare function tileAndCharsToWindowCoords(
    tileX: number,
    tileY: number,
    charX: number,
    charY: number,
): Point;

declare function testCanvasForCrossOriginError(): void;

declare var lcsShardCharVectors: [
    [[0, 3], [1, 4], [0, 4], [0, 3]],
    [[0, 3], [2, 4], [0, 4], [0, 3]],
    [[0, 1], [1, 4], [0, 4], [0, 1]],
    [[0, 1], [2, 4], [0, 4], [0, 1]],
    [[0, 0], [1, 4], [0, 4], [0, 0]],
    [[1, 0], [2, 0], [2, 4], [0, 4], [0, 1], [1, 0]],
    [[2, 0], [2, 4], [0, 4], [0, 1], [2, 0]],
    [[1, 0], [2, 0], [2, 4], [0, 4], [0, 3], [1, 0]],
    [[2, 0], [2, 4], [0, 4], [0, 3], [2, 0]],
    [[1, 0], [2, 0], [2, 4], [0, 4], [1, 0]],
    [[2, 1], [2, 4], [0, 4], [0, 3], [2, 1]],
    [[2, 3], [2, 4], [1, 4], [2, 3]],
    [[2, 3], [2, 4], [0, 4], [2, 3]],
    [[2, 1], [2, 4], [1, 4], [2, 1]],
    [[2, 1], [2, 4], [0, 4], [2, 1]],
    [[2, 0], [2, 4], [1, 4], [2, 0]],
    [[0, 0], [1, 0], [2, 1], [2, 4], [0, 4], [0, 0]],
    [[0, 0], [2, 1], [2, 4], [0, 4], [0, 0]],
    [[0, 0], [1, 0], [2, 3], [2, 4], [0, 4], [0, 0]],
    [[0, 0], [2, 3], [2, 4], [0, 4], [0, 0]],
    [[0, 0], [1, 0], [2, 4], [0, 4], [0, 0]],
    [[0, 1], [2, 3], [2, 4], [0, 4], [0, 1]],
    [[0, 0], [2, 0], [2, 4], [1, 4], [0, 3], [0, 0]],
    [[0, 0], [2, 0], [2, 4], [0, 3], [0, 0]],
    [[0, 0], [2, 0], [2, 4], [1, 4], [0, 1], [0, 0]],
    [[0, 0], [2, 0], [2, 4], [0, 1], [0, 0]],
    [[0, 0], [2, 0], [2, 4], [1, 4], [0, 0]],
    [[0, 0], [1, 0], [0, 1], [0, 0]],
    [[0, 0], [2, 0], [0, 1], [0, 0]],
    [[0, 0], [1, 0], [0, 3], [0, 0]],
    [[0, 0], [2, 0], [0, 3], [0, 0]],
    [[0, 0], [1, 0], [0, 4], [0, 0]],
    [[0, 0], [2, 0], [2, 1], [0, 3], [0, 0]],
    [[0, 0], [2, 0], [2, 3], [1, 4], [0, 4], [0, 0]],
    [[0, 0], [2, 0], [2, 3], [0, 4], [0, 0]],
    [[0, 0], [2, 0], [2, 1], [1, 4], [0, 4], [0, 0]],
    [[0, 0], [2, 0], [2, 1], [0, 4], [0, 0]],
    [[0, 0], [2, 0], [1, 4], [0, 4], [0, 0]],
    [[1, 0], [2, 0], [2, 1], [1, 0]],
    [[0, 0], [2, 0], [2, 1], [0, 0]],
    [[1, 0], [2, 0], [2, 3], [1, 0]],
    [[0, 0], [2, 0], [2, 3], [0, 0]],
    [[1, 0], [2, 0], [2, 4], [1, 0]],
    [[0, 0], [2, 0], [2, 3], [0, 1], [0, 0]],
    [[0, 0], [2, 0], [2, 4], [0, 4], [1, 2], [0, 0]],
    [[0, 0], [1, 2], [2, 0], [2, 4], [0, 4], [0, 0]],
    [[0, 0], [2, 0], [1, 2], [2, 4], [0, 4], [0, 0]],
    [[0, 0], [2, 0], [2, 4], [1, 2], [0, 4], [0, 0]],
    [[0, 0], [1, 2], [0, 4], [0, 0]],
    [[0, 0], [2, 0], [1, 2], [0, 0]],
    [[2, 0], [2, 4], [1, 2], [2, 0]],
    [[1, 2], [2, 4], [0, 4], [1, 2]],
    // skip (lcs)
    [[0, 0], [2, 4], [0, 4], [2, 0], [0, 0]],
    [[2, 0], [2, 4], [0, 0], [0, 4], [2, 0]],
    // box-drawing bold mode; four 90-deg, four iso
    [[2, 0], [2, 4], [0, 4], [2, 0]], // 54
    [[0, 0], [2, 4], [0, 4], [0, 0]],
    [[0, 0], [2, 0], [0, 4], [0, 0]],
    [[0, 0], [2, 0], [2, 4], [0, 0]],
    [[1, 0], [2, 4], [0, 4], [1, 0]], // 58
    [[0, 0], [2, 2], [0, 4], [0, 0]],
    [[0, 0], [2, 0], [1, 4], [0, 0]],
    [[2, 0], [2, 4], [0, 2], [2, 0]],
];

/**
 * 2x4 octant character lookup table (maps relative char codes to bit patterns).
 * @remarks Range: 0x1CD00 - 0x1CDE5.
 */
declare var lcsOctantCharPoints: [
    4,
    6,
    7,
    8,
    9,
    11,
    12,
    13,
    14,
    16,
    17,
    18,
    19,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    81,
    82,
    83,
    84,
    86,
    87,
    88,
    89,
    91,
    92,
    93,
    94,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    111,
    112,
    113,
    114,
    115,
    116,
    117,
    118,
    119,
    120,
    121,
    122,
    123,
    124,
    125,
    126,
    127,
    129,
    130,
    131,
    132,
    133,
    134,
    135,
    136,
    137,
    138,
    139,
    140,
    141,
    142,
    143,
    144,
    145,
    146,
    147,
    148,
    149,
    150,
    151,
    152,
    153,
    154,
    155,
    156,
    157,
    158,
    159,
    161,
    162,
    163,
    164,
    166,
    167,
    168,
    169,
    171,
    172,
    173,
    174,
    176,
    177,
    178,
    179,
    180,
    181,
    182,
    183,
    184,
    185,
    186,
    187,
    188,
    189,
    190,
    191,
    193,
    194,
    195,
    196,
    197,
    198,
    199,
    200,
    201,
    202,
    203,
    204,
    205,
    206,
    207,
    208,
    209,
    210,
    211,
    212,
    213,
    214,
    215,
    216,
    217,
    218,
    219,
    220,
    221,
    222,
    223,
    224,
    225,
    226,
    227,
    228,
    229,
    230,
    231,
    232,
    233,
    234,
    235,
    236,
    237,
    238,
    239,
    241,
    242,
    243,
    244,
    246,
    247,
    248,
    249,
    251,
    253,
    254,
];

declare const fracBlockTransforms: [
    // relative offset: 0x2580 (until 0x2590)
    [
        [2, 0.5],
        [3, 0.125],
        [3, 0.25],
        [3, 0.375],
        [3, 0.5],
        [3, 0.625],
        [3, 0.75],
        [3, 0.875],
        [0, 1],
        [0, 0.875],
        [0, 0.75],
        [0, 0.625],
        [0, 0.5],
        [0, 0.375],
        [0, 0.25],
        [0, 0.125],
        [1, 0.5],
    ],

    // relative offset: 0x2594 (until 0x2595)
    [[2, 0.125], [1, 0.125]],

    // relative offset: 0x1FB70 (until 0x1FB8B)
    [
        [0, 0.125, 0.125],
        [0, 0.125, 0.25],
        [0, 0.125, 0.375],
        [0, 0.125, 0.5],
        [0, 0.125, 0.625],
        [0, 0.125, 0.75],
        [2, 0.125, 0.125],
        [2, 0.125, 0.25],
        [2, 0.125, 0.375],
        [2, 0.125, 0.5],
        [2, 0.125, 0.625],
        [2, 0.125, 0.75],
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        [2, 0.25],
        [2, 0.375],
        [2, 0.625],
        [2, 0.75],
        [2, 0.875],
        [1, 0.25],
        [1, 0.375],
        [1, 0.625],
        [1, 0.75],
        [1, 0.875],
    ],
];

declare function isValidSpecialSymbol(charCode: number): boolean;
declare function isShardGridManipulable(
    charCode: number,
): charCode is ShardGridManipulableChar;

declare function drawShadeChar(
    charCode: number,
    textRender: CanvasRenderingContext2D,
    x: number,
    y: number,
    clampW: number,
    clampH: number,
    flags?: unknown,
): void;
declare function draw2by2Char(
    charCode: number,
    textRender: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
): void;
declare function draw2by3Char(
    charCode: number,
    textRender: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
): void;
declare function drawTriangleShardChar(
    charCode: number,
    textRender: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    altGrid: boolean,
): void;
declare function draw2by4Char(
    charCode: number,
    textRender: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
): void;
declare function drawFractionalBlockChar(
    charCode: number,
    textRender: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
): void;
declare function drawBlockChar(
    charCode: number,
    textRender: CanvasRenderingContext2D,
    x: number,
    y: number,
    cellW: number,
    cellH: number,
    altGrid: boolean,
): void;

declare function dispatchCharClientHook(
    cCode: number,
    textRender: CanvasRenderingContext2D,
    tileX: number,
    tileY: number,
    x: number,
    y: number,
    clampW: number,
    clampH: number,
): boolean;

declare function renderChar(
    textRender: CanvasRenderingContext2D,
    offsetX: number,
    offsetY: number,
    char: string,
    color: number,
    cellW: number,
    cellH: number,
    protectionValue: Protections,
    linkType: LinkType,
    highlight: keyof typeof colorClasses | string[],
    charX: number,
    charY: number,
    tileX: number,
    tileY: number,
    isOverflow: boolean,
): boolean;

declare function drawGrid(renderCtx: CanvasRenderingContext2D, gridColor: string, offsetX: number, offsetY: number, tileX: number, tileY: number): void;
declare function drawObstructedCursor(renderCtx: CanvasRenderingContext2D, content: string, curX: number, curY: number, offsetX: number, offsetY: number): void;
declare function getTileBackgroundColor(tile: WorldTile): string;
declare function renderTileBackground(renderCtx: CanvasRenderingContext2D, offsetX: number, offsetY: number, tile: WorldTile, tileX: number, tileY: number, cursorVisibility: boolean): boolean;
declare function renderTileBackgroundImage(renderCtx: CanvasRenderingContext2D, tileX: number, tileY: number, ctxOffX: number, ctxOffY: number): boolean;
declare function clearTile(tileX: number, tileY: number): void;
declare function renderContent(textRenderCtx: CanvasRenderingContext2D, tileX: number, tileY: number, clampW: number, clampH: number, offsetX: number, offsetY: number, bounds: boolean, charOverflowMode: boolean): boolean;
declare function renderCellBgColors(textRenderCtx: CanvasRenderingContext2D, tileX: number, tileY: number, clampW: number, clampH: number): boolean;
declare function drawTile(tileX: number, tileY: number): boolean;
declare function renderTile(tileX: number, tileY: number): void;
declare function renderNextTilesInQueue(): void;
/**
 * @param redraw deprecated
 */
declare function renderTiles(redraw: boolean): void;
declare function renderTilesSelective(): void;
declare function setRedrawPatterned(pattern: "square" | "random"): void;
declare function renderGuestCursors(renderCtx: CanvasRenderingContext2D, offsetX: number, offsetY: number, tile: WorldTile, tileX: number, tileY: number): boolean;
declare function renderCursorOutline(renderCtx: CanvasRenderingContext2D, offsetX: number, offsetY: number): void;