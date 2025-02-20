const colores = [
  {
    code: "bg-slate-50",
    hex: "#f8fafc",
    r: 248,
    g: 250,
    b: 252,
    rgb: "248,250,252",
  },
  {
    code: "bg-slate-100",
    hex: "#f1f5f9",
    r: 241,
    g: 245,
    b: 249,
    rgb: "241,245,249",
  },
  {
    code: "bg-slate-200",
    hex: "#e2e8f0",
    r: 226,
    g: 232,
    b: 240,
    rgb: "226,232,240",
  },
  {
    code: "bg-slate-300",
    hex: "#cbd5e1",
    r: 203,
    g: 213,
    b: 225,
    rgb: "203,213,225",
  },
  {
    code: "bg-slate-400",
    hex: "#94a3b8",
    r: 148,
    g: 163,
    b: 184,
    rgb: "148,163,184",
  },
  {
    code: "bg-slate-500",
    hex: "#64748b",
    r: 100,
    g: 116,
    b: 139,
    rgb: "100,116,139",
  },
  {
    code: "bg-slate-600",
    hex: "#475569",
    r: 71,
    g: 85,
    b: 105,
    rgb: "71,85,105",
  },
  {
    code: "bg-slate-700",
    hex: "#334155",
    r: 51,
    g: 65,
    b: 85,
    rgb: "51,65,85",
  },
  {
    code: "bg-slate-800",
    hex: "#1e293b",
    r: 30,
    g: 41,
    b: 59,
    rgb: "30,41,59",
  },
  {
    code: "bg-slate-900",
    hex: "#0f172a",
    r: 15,
    g: 23,
    b: 42,
    rgb: "15,23,42",
  },
  {
    code: "bg-slate-950",
    hex: "#020617",
    r: 2,
    g: 6,
    b: 23,
    rgb: "2,6,23",
  },
  {
    code: "bg-gray-50",
    hex: "#f9fafb",
    r: 249,
    g: 250,
    b: 251,
    rgb: "249,250,251",
  },
  {
    code: "bg-gray-100",
    hex: "#f3f4f6",
    r: 243,
    g: 244,
    b: 246,
    rgb: "243,244,246",
  },
  {
    code: "bg-gray-200",
    hex: "#e5e7eb",
    r: 229,
    g: 231,
    b: 235,
    rgb: "229,231,235",
  },
  {
    code: "bg-gray-300",
    hex: "#d1d5db",
    r: 209,
    g: 213,
    b: 219,
    rgb: "209,213,219",
  },
  {
    code: "bg-gray-400",
    hex: "#9ca3af",
    r: 156,
    g: 163,
    b: 175,
    rgb: "156,163,175",
  },
  {
    code: "bg-gray-500",
    hex: "#6b7280",
    r: 107,
    g: 114,
    b: 128,
    rgb: "107,114,128",
  },
  {
    code: "bg-gray-600",
    hex: "#4b5563",
    r: 75,
    g: 85,
    b: 99,
    rgb: "75,85,99",
  },
  {
    code: "bg-gray-700",
    hex: "#374151",
    r: 55,
    g: 65,
    b: 81,
    rgb: "55,65,81",
  },
  {
    code: "bg-gray-800",
    hex: "#1f2937",
    r: 31,
    g: 41,
    b: 55,
    rgb: "31,41,55",
  },
  {
    code: "bg-gray-900",
    hex: "#111827",
    r: 17,
    g: 24,
    b: 39,
    rgb: "17,24,39",
  },
  { code: "bg-gray-950", hex: "#030712", r: 3, g: 7, b: 18, rgb: "3,7,18" },
  {
    code: "bg-zinc-50",
    hex: "#fafafa",
    r: 250,
    g: 250,
    b: 250,
    rgb: "250,250,250",
  },
  {
    code: "bg-zinc-100",
    hex: "#f4f4f5",
    r: 244,
    g: 244,
    b: 245,
    rgb: "244,244,245",
  },
  {
    code: "bg-zinc-200",
    hex: "#e4e4e7",
    r: 228,
    g: 228,
    b: 231,
    rgb: "228,228,231",
  },
  {
    code: "bg-zinc-300",
    hex: "#d4d4d8",
    r: 212,
    g: 212,
    b: 216,
    rgb: "212,212,216",
  },
  {
    code: "bg-zinc-400",
    hex: "#a1a1aa",
    r: 161,
    g: 161,
    b: 170,
    rgb: "161,161,170",
  },
  {
    code: "bg-zinc-500",
    hex: "#71717a",
    r: 113,
    g: 113,
    b: 122,
    rgb: "113,113,122",
  },
  {
    code: "bg-zinc-600",
    hex: "#52525b",
    r: 82,
    g: 82,
    b: 91,
    rgb: "82,82,91",
  },
  {
    code: "bg-zinc-700",
    hex: "#3f3f46",
    r: 63,
    g: 63,
    b: 70,
    rgb: "63,63,70",
  },
  {
    code: "bg-zinc-800",
    hex: "#27272a",
    r: 39,
    g: 39,
    b: 42,
    rgb: "39,39,42",
  },
  {
    code: "bg-zinc-900",
    hex: "#18181b",
    r: 24,
    g: 24,
    b: 27,
    rgb: "24,24,27",
  },
  { code: "bg-zinc-950", hex: "#09090b", r: 9, g: 9, b: 11, rgb: "9,9,11" },
  {
    code: "bg-neutral-50",
    hex: "#fafafa",
    r: 250,
    g: 250,
    b: 250,
    rgb: "250,250,250",
  },
  {
    code: "bg-neutral-100",
    hex: "#f5f5f5",
    r: 245,
    g: 245,
    b: 245,
    rgb: "245,245,245",
  },
  {
    code: "bg-neutral-200",
    hex: "#e5e5e5",
    r: 229,
    g: 229,
    b: 229,
    rgb: "229,229,229",
  },
  {
    code: "bg-neutral-300",
    hex: "#d4d4d4",
    r: 212,
    g: 212,
    b: 212,
    rgb: "212,212,212",
  },
  {
    code: "bg-neutral-400",
    hex: "#a3a3a3",
    r: 163,
    g: 163,
    b: 163,
    rgb: "163,163,163",
  },
  {
    code: "bg-neutral-500",
    hex: "#737373",
    r: 115,
    g: 115,
    b: 115,
    rgb: "115,115,115",
  },
  {
    code: "bg-neutral-600",
    hex: "#525252",
    r: 82,
    g: 82,
    b: 82,
    rgb: "82,82,82",
  },
  {
    code: "bg-neutral-700",
    hex: "#404040",
    r: 64,
    g: 64,
    b: 64,
    rgb: "64,64,64",
  },
  {
    code: "bg-neutral-800",
    hex: "#262626",
    r: 38,
    g: 38,
    b: 38,
    rgb: "38,38,38",
  },
  {
    code: "bg-neutral-900",
    hex: "#171717",
    r: 23,
    g: 23,
    b: 23,
    rgb: "23,23,23",
  },
  {
    code: "bg-neutral-950",
    hex: "#0a0a0a",
    r: 10,
    g: 10,
    b: 10,
    rgb: "10,10,10",
  },
  {
    code: "bg-stone-50",
    hex: "#fafaf9",
    r: 250,
    g: 250,
    b: 249,
    rgb: "250,250,249",
  },
  {
    code: "bg-stone-100",
    hex: "#f5f5f4",
    r: 245,
    g: 245,
    b: 244,
    rgb: "245,245,244",
  },
  {
    code: "bg-stone-200",
    hex: "#e7e5e4",
    r: 231,
    g: 229,
    b: 228,
    rgb: "231,229,228",
  },
  {
    code: "bg-stone-300",
    hex: "#d6d3d1",
    r: 214,
    g: 211,
    b: 209,
    rgb: "214,211,209",
  },
  {
    code: "bg-stone-400",
    hex: "#a8a29e",
    r: 168,
    g: 162,
    b: 158,
    rgb: "168,162,158",
  },
  {
    code: "bg-stone-500",
    hex: "#78716c",
    r: 120,
    g: 113,
    b: 108,
    rgb: "120,113,108",
  },
  {
    code: "bg-stone-600",
    hex: "#57534e",
    r: 87,
    g: 83,
    b: 78,
    rgb: "87,83,78",
  },
  {
    code: "bg-stone-700",
    hex: "#44403c",
    r: 68,
    g: 64,
    b: 60,
    rgb: "68,64,60",
  },
  {
    code: "bg-stone-800",
    hex: "#292524",
    r: 41,
    g: 37,
    b: 36,
    rgb: "41,37,36",
  },
  {
    code: "bg-stone-900",
    hex: "#1c1917",
    r: 28,
    g: 25,
    b: 23,
    rgb: "28,25,23",
  },
  {
    code: "bg-stone-950",
    hex: "#0c0a09",
    r: 12,
    g: 10,
    b: 9,
    rgb: "12,10,9",
  },
  {
    code: "bg-red-50",
    hex: "#fef2f2",
    r: 254,
    g: 242,
    b: 242,
    rgb: "254,242,242",
  },
  {
    code: "bg-red-100",
    hex: "#fee2e2",
    r: 254,
    g: 226,
    b: 226,
    rgb: "254,226,226",
  },
  {
    code: "bg-red-200",
    hex: "#fecaca",
    r: 254,
    g: 202,
    b: 202,
    rgb: "254,202,202",
  },
  {
    code: "bg-red-300",
    hex: "#fca5a5",
    r: 252,
    g: 165,
    b: 165,
    rgb: "252,165,165",
  },
  {
    code: "bg-red-400",
    hex: "#f87171",
    r: 248,
    g: 113,
    b: 113,
    rgb: "248,113,113",
  },
  {
    code: "bg-red-500",
    hex: "#ef4444",
    r: 239,
    g: 68,
    b: 68,
    rgb: "239,68,68",
  },
  {
    code: "bg-red-600",
    hex: "#dc2626",
    r: 220,
    g: 38,
    b: 38,
    rgb: "220,38,38",
  },
  {
    code: "bg-red-700",
    hex: "#b91c1c",
    r: 185,
    g: 28,
    b: 28,
    rgb: "185,28,28",
  },
  {
    code: "bg-red-800",
    hex: "#991b1b",
    r: 153,
    g: 27,
    b: 27,
    rgb: "153,27,27",
  },
  {
    code: "bg-red-900",
    hex: "#7f1d1d",
    r: 127,
    g: 29,
    b: 29,
    rgb: "127,29,29",
  },
  {
    code: "bg-red-950",
    hex: "#450a0a",
    r: 69,
    g: 10,
    b: 10,
    rgb: "69,10,10",
  },
  {
    code: "bg-orange-50",
    hex: "#fff7ed",
    r: 255,
    g: 247,
    b: 237,
    rgb: "255,247,237",
  },
  {
    code: "bg-orange-100",
    hex: "#ffedd5",
    r: 255,
    g: 237,
    b: 213,
    rgb: "255,237,213",
  },
  {
    code: "bg-orange-200",
    hex: "#fed7aa",
    r: 254,
    g: 215,
    b: 170,
    rgb: "254,215,170",
  },
  {
    code: "bg-orange-300",
    hex: "#fdba74",
    r: 253,
    g: 186,
    b: 116,
    rgb: "253,186,116",
  },
  {
    code: "bg-orange-400",
    hex: "#fb923c",
    r: 251,
    g: 146,
    b: 60,
    rgb: "251,146,60",
  },
  {
    code: "bg-orange-500",
    hex: "#f97316",
    r: 249,
    g: 115,
    b: 22,
    rgb: "249,115,22",
  },
  {
    code: "bg-orange-600",
    hex: "#ea580c",
    r: 234,
    g: 88,
    b: 12,
    rgb: "234,88,12",
  },
  {
    code: "bg-orange-700",
    hex: "#c2410c",
    r: 194,
    g: 65,
    b: 12,
    rgb: "194,65,12",
  },
  {
    code: "bg-orange-800",
    hex: "#9a3412",
    r: 154,
    g: 52,
    b: 18,
    rgb: "154,52,18",
  },
  {
    code: "bg-orange-900",
    hex: "#7c2d12",
    r: 124,
    g: 45,
    b: 18,
    rgb: "124,45,18",
  },
  {
    code: "bg-orange-950",
    hex: "#431407",
    r: 67,
    g: 20,
    b: 7,
    rgb: "67,20,7",
  },
  {
    code: "bg-amber-50",
    hex: "#fffbeb",
    r: 255,
    g: 251,
    b: 235,
    rgb: "255,251,235",
  },
  {
    code: "bg-amber-100",
    hex: "#fef3c7",
    r: 254,
    g: 243,
    b: 199,
    rgb: "254,243,199",
  },
  {
    code: "bg-amber-200",
    hex: "#fde68a",
    r: 253,
    g: 230,
    b: 138,
    rgb: "253,230,138",
  },
  {
    code: "bg-amber-300",
    hex: "#fcd34d",
    r: 252,
    g: 211,
    b: 77,
    rgb: "252,211,77",
  },
  {
    code: "bg-amber-400",
    hex: "#fbbf24",
    r: 251,
    g: 191,
    b: 36,
    rgb: "251,191,36",
  },
  {
    code: "bg-amber-500",
    hex: "#f59e0b",
    r: 245,
    g: 158,
    b: 11,
    rgb: "245,158,11",
  },
  {
    code: "bg-amber-600",
    hex: "#d97706",
    r: 217,
    g: 119,
    b: 6,
    rgb: "217,119,6",
  },
  {
    code: "bg-amber-700",
    hex: "#b45309",
    r: 180,
    g: 83,
    b: 9,
    rgb: "180,83,9",
  },
  {
    code: "bg-amber-800",
    hex: "#92400e",
    r: 146,
    g: 64,
    b: 14,
    rgb: "146,64,14",
  },
  {
    code: "bg-amber-900",
    hex: "#78350f",
    r: 120,
    g: 53,
    b: 15,
    rgb: "120,53,15",
  },
  {
    code: "bg-amber-950",
    hex: "#451a03",
    r: 69,
    g: 26,
    b: 3,
    rgb: "69,26,3",
  },
  {
    code: "bg-yellow-50",
    hex: "#fefce8",
    r: 254,
    g: 252,
    b: 232,
    rgb: "254,252,232",
  },
  {
    code: "bg-yellow-100",
    hex: "#fef9c3",
    r: 254,
    g: 249,
    b: 195,
    rgb: "254,249,195",
  },
  {
    code: "bg-yellow-200",
    hex: "#fef08a",
    r: 254,
    g: 240,
    b: 138,
    rgb: "254,240,138",
  },
  {
    code: "bg-yellow-300",
    hex: "#fde047",
    r: 253,
    g: 224,
    b: 71,
    rgb: "253,224,71",
  },
  {
    code: "bg-yellow-400",
    hex: "#facc15",
    r: 250,
    g: 204,
    b: 21,
    rgb: "250,204,21",
  },
  {
    code: "bg-yellow-500",
    hex: "#eab308",
    r: 234,
    g: 179,
    b: 8,
    rgb: "234,179,8",
  },
  {
    code: "bg-yellow-600",
    hex: "#ca8a04",
    r: 202,
    g: 138,
    b: 4,
    rgb: "202,138,4",
  },
  {
    code: "bg-yellow-700",
    hex: "#a16207",
    r: 161,
    g: 98,
    b: 7,
    rgb: "161,98,7",
  },
  {
    code: "bg-yellow-800",
    hex: "#854d0e",
    r: 133,
    g: 77,
    b: 14,
    rgb: "133,77,14",
  },
  {
    code: "bg-yellow-900",
    hex: "#713f12",
    r: 113,
    g: 63,
    b: 18,
    rgb: "113,63,18",
  },
  {
    code: "bg-yellow-950",
    hex: "#422006",
    r: 66,
    g: 32,
    b: 6,
    rgb: "66,32,6",
  },
  {
    code: "bg-lime-50",
    hex: "#f7fee7",
    r: 247,
    g: 254,
    b: 231,
    rgb: "247,254,231",
  },
  {
    code: "bg-lime-100",
    hex: "#ecfccb",
    r: 236,
    g: 252,
    b: 203,
    rgb: "236,252,203",
  },
  {
    code: "bg-lime-200",
    hex: "#d9f99d",
    r: 217,
    g: 249,
    b: 157,
    rgb: "217,249,157",
  },
  {
    code: "bg-lime-300",
    hex: "#bef264",
    r: 190,
    g: 242,
    b: 100,
    rgb: "190,242,100",
  },
  {
    code: "bg-lime-400",
    hex: "#a3e635",
    r: 163,
    g: 230,
    b: 53,
    rgb: "163,230,53",
  },
  {
    code: "bg-lime-500",
    hex: "#84cc16",
    r: 132,
    g: 204,
    b: 22,
    rgb: "132,204,22",
  },
  {
    code: "bg-lime-600",
    hex: "#65a30d",
    r: 101,
    g: 163,
    b: 13,
    rgb: "101,163,13",
  },
  {
    code: "bg-lime-700",
    hex: "#4d7c0f",
    r: 77,
    g: 124,
    b: 15,
    rgb: "77,124,15",
  },
  {
    code: "bg-lime-800",
    hex: "#3f6212",
    r: 63,
    g: 98,
    b: 18,
    rgb: "63,98,18",
  },
  {
    code: "bg-lime-900",
    hex: "#365314",
    r: 54,
    g: 83,
    b: 20,
    rgb: "54,83,20",
  },
  {
    code: "bg-lime-950",
    hex: "#1a2e05",
    r: 26,
    g: 46,
    b: 5,
    rgb: "26,46,5",
  },
  {
    code: "bg-green-50",
    hex: "#f0fdf4",
    r: 240,
    g: 253,
    b: 244,
    rgb: "240,253,244",
  },
  {
    code: "bg-green-100",
    hex: "#dcfce7",
    r: 220,
    g: 252,
    b: 231,
    rgb: "220,252,231",
  },
  {
    code: "bg-green-200",
    hex: "#bbf7d0",
    r: 187,
    g: 247,
    b: 208,
    rgb: "187,247,208",
  },
  {
    code: "bg-green-300",
    hex: "#86efac",
    r: 134,
    g: 239,
    b: 172,
    rgb: "134,239,172",
  },
  {
    code: "bg-green-400",
    hex: "#4ade80",
    r: 74,
    g: 222,
    b: 128,
    rgb: "74,222,128",
  },
  {
    code: "bg-green-500",
    hex: "#22c55e",
    r: 34,
    g: 197,
    b: 94,
    rgb: "34,197,94",
  },
  {
    code: "bg-green-600",
    hex: "#16a34a",
    r: 22,
    g: 163,
    b: 74,
    rgb: "22,163,74",
  },
  {
    code: "bg-green-700",
    hex: "#15803d",
    r: 21,
    g: 128,
    b: 61,
    rgb: "21,128,61",
  },
  {
    code: "bg-green-800",
    hex: "#166534",
    r: 22,
    g: 101,
    b: 52,
    rgb: "22,101,52",
  },
  {
    code: "bg-green-900",
    hex: "#14532d",
    r: 20,
    g: 83,
    b: 45,
    rgb: "20,83,45",
  },
  {
    code: "bg-green-950",
    hex: "#052e16",
    r: 5,
    g: 46,
    b: 22,
    rgb: "5,46,22",
  },
  {
    code: "bg-emerald-50",
    hex: "#ecfdf5",
    r: 236,
    g: 253,
    b: 245,
    rgb: "236,253,245",
  },
  {
    code: "bg-emerald-100",
    hex: "#d1fae5",
    r: 209,
    g: 250,
    b: 229,
    rgb: "209,250,229",
  },
  {
    code: "bg-emerald-200",
    hex: "#a7f3d0",
    r: 167,
    g: 243,
    b: 208,
    rgb: "167,243,208",
  },
  {
    code: "bg-emerald-300",
    hex: "#6ee7b7",
    r: 110,
    g: 231,
    b: 183,
    rgb: "110,231,183",
  },
  {
    code: "bg-emerald-400",
    hex: "#34d399",
    r: 52,
    g: 211,
    b: 153,
    rgb: "52,211,153",
  },
  {
    code: "bg-emerald-500",
    hex: "#10b981",
    r: 16,
    g: 185,
    b: 129,
    rgb: "16,185,129",
  },
  {
    code: "bg-emerald-600",
    hex: "#059669",
    r: 5,
    g: 150,
    b: 105,
    rgb: "5,150,105",
  },
  {
    code: "bg-emerald-700",
    hex: "#047857",
    r: 4,
    g: 120,
    b: 87,
    rgb: "4,120,87",
  },
  {
    code: "bg-emerald-800",
    hex: "#065f46",
    r: 6,
    g: 95,
    b: 70,
    rgb: "6,95,70",
  },
  {
    code: "bg-emerald-900",
    hex: "#064e3b",
    r: 6,
    g: 78,
    b: 59,
    rgb: "6,78,59",
  },
  {
    code: "bg-emerald-950",
    hex: "#022c22",
    r: 2,
    g: 44,
    b: 34,
    rgb: "2,44,34",
  },
  {
    code: "bg-teal-50",
    hex: "#f0fdfa",
    r: 240,
    g: 253,
    b: 250,
    rgb: "240,253,250",
  },
  {
    code: "bg-teal-100",
    hex: "#ccfbf1",
    r: 204,
    g: 251,
    b: 241,
    rgb: "204,251,241",
  },
  {
    code: "bg-teal-200",
    hex: "#99f6e4",
    r: 153,
    g: 246,
    b: 228,
    rgb: "153,246,228",
  },
  {
    code: "bg-teal-300",
    hex: "#5eead4",
    r: 94,
    g: 234,
    b: 212,
    rgb: "94,234,212",
  },
  {
    code: "bg-teal-400",
    hex: "#2dd4bf",
    r: 45,
    g: 212,
    b: 191,
    rgb: "45,212,191",
  },
  {
    code: "bg-teal-500",
    hex: "#14b8a6",
    r: 20,
    g: 184,
    b: 166,
    rgb: "20,184,166",
  },
  {
    code: "bg-teal-600",
    hex: "#0d9488",
    r: 13,
    g: 148,
    b: 136,
    rgb: "13,148,136",
  },
  {
    code: "bg-teal-700",
    hex: "#0f766e",
    r: 15,
    g: 118,
    b: 110,
    rgb: "15,118,110",
  },
  {
    code: "bg-teal-800",
    hex: "#115e59",
    r: 17,
    g: 94,
    b: 89,
    rgb: "17,94,89",
  },
  {
    code: "bg-teal-900",
    hex: "#134e4a",
    r: 19,
    g: 78,
    b: 74,
    rgb: "19,78,74",
  },
  {
    code: "bg-teal-950",
    hex: "#042f2e",
    r: 4,
    g: 47,
    b: 46,
    rgb: "4,47,46",
  },
  {
    code: "bg-cyan-50",
    hex: "#ecfeff",
    r: 236,
    g: 254,
    b: 255,
    rgb: "236,254,255",
  },
  {
    code: "bg-cyan-100",
    hex: "#cffafe",
    r: 207,
    g: 250,
    b: 254,
    rgb: "207,250,254",
  },
  {
    code: "bg-cyan-200",
    hex: "#a5f3fc",
    r: 165,
    g: 243,
    b: 252,
    rgb: "165,243,252",
  },
  {
    code: "bg-cyan-300",
    hex: "#67e8f9",
    r: 103,
    g: 232,
    b: 249,
    rgb: "103,232,249",
  },
  {
    code: "bg-cyan-400",
    hex: "#22d3ee",
    r: 34,
    g: 211,
    b: 238,
    rgb: "34,211,238",
  },
  {
    code: "bg-cyan-500",
    hex: "#06b6d4",
    r: 6,
    g: 182,
    b: 212,
    rgb: "6,182,212",
  },
  {
    code: "bg-cyan-600",
    hex: "#0891b2",
    r: 8,
    g: 145,
    b: 178,
    rgb: "8,145,178",
  },
  {
    code: "bg-cyan-700",
    hex: "#0e7490",
    r: 14,
    g: 116,
    b: 144,
    rgb: "14,116,144",
  },
  {
    code: "bg-cyan-800",
    hex: "#155e75",
    r: 21,
    g: 94,
    b: 117,
    rgb: "21,94,117",
  },
  {
    code: "bg-cyan-900",
    hex: "#164e63",
    r: 22,
    g: 78,
    b: 99,
    rgb: "22,78,99",
  },
  {
    code: "bg-cyan-950",
    hex: "#083344",
    r: 8,
    g: 51,
    b: 68,
    rgb: "8,51,68",
  },
  {
    code: "bg-sky-50",
    hex: "#f0f9ff",
    r: 240,
    g: 249,
    b: 255,
    rgb: "240,249,255",
  },
  {
    code: "bg-sky-100",
    hex: "#e0f2fe",
    r: 224,
    g: 242,
    b: 254,
    rgb: "224,242,254",
  },
  {
    code: "bg-sky-200",
    hex: "#bae6fd",
    r: 186,
    g: 230,
    b: 253,
    rgb: "186,230,253",
  },
  {
    code: "bg-sky-300",
    hex: "#7dd3fc",
    r: 125,
    g: 211,
    b: 252,
    rgb: "125,211,252",
  },
  {
    code: "bg-sky-400",
    hex: "#38bdf8",
    r: 56,
    g: 189,
    b: 248,
    rgb: "56,189,248",
  },
  {
    code: "bg-sky-500",
    hex: "#0ea5e9",
    r: 14,
    g: 165,
    b: 233,
    rgb: "14,165,233",
  },
  {
    code: "bg-sky-600",
    hex: "#0284c7",
    r: 2,
    g: 132,
    b: 199,
    rgb: "2,132,199",
  },
  {
    code: "bg-sky-700",
    hex: "#0369a1",
    r: 3,
    g: 105,
    b: 161,
    rgb: "3,105,161",
  },
  {
    code: "bg-sky-800",
    hex: "#075985",
    r: 7,
    g: 89,
    b: 133,
    rgb: "7,89,133",
  },
  {
    code: "bg-sky-900",
    hex: "#0c4a6e",
    r: 12,
    g: 74,
    b: 110,
    rgb: "12,74,110",
  },
  {
    code: "bg-sky-950",
    hex: "#082f49",
    r: 8,
    g: 47,
    b: 73,
    rgb: "8,47,73",
  },
  {
    code: "bg-blue-50",
    hex: "#eff6ff",
    r: 239,
    g: 246,
    b: 255,
    rgb: "239,246,255",
  },
  {
    code: "bg-blue-100",
    hex: "#dbeafe",
    r: 219,
    g: 234,
    b: 254,
    rgb: "219,234,254",
  },
  {
    code: "bg-blue-200",
    hex: "#bfdbfe",
    r: 191,
    g: 219,
    b: 254,
    rgb: "191,219,254",
  },
  {
    code: "bg-blue-300",
    hex: "#93c5fd",
    r: 147,
    g: 197,
    b: 253,
    rgb: "147,197,253",
  },
  {
    code: "bg-blue-400",
    hex: "#60a5fa",
    r: 96,
    g: 165,
    b: 250,
    rgb: "96,165,250",
  },
  {
    code: "bg-blue-500",
    hex: "#3b82f6",
    r: 59,
    g: 130,
    b: 246,
    rgb: "59,130,246",
  },
  {
    code: "bg-blue-600",
    hex: "#2563eb",
    r: 37,
    g: 99,
    b: 235,
    rgb: "37,99,235",
  },
  {
    code: "bg-blue-700",
    hex: "#1d4ed8",
    r: 29,
    g: 78,
    b: 216,
    rgb: "29,78,216",
  },
  {
    code: "bg-blue-800",
    hex: "#1e40af",
    r: 30,
    g: 64,
    b: 175,
    rgb: "30,64,175",
  },
  {
    code: "bg-blue-900",
    hex: "#1e3a8a",
    r: 30,
    g: 58,
    b: 138,
    rgb: "30,58,138",
  },
  {
    code: "bg-blue-950",
    hex: "#172554",
    r: 23,
    g: 37,
    b: 84,
    rgb: "23,37,84",
  },
  {
    code: "bg-indigo-50",
    hex: "#eef2ff",
    r: 238,
    g: 242,
    b: 255,
    rgb: "238,242,255",
  },
  {
    code: "bg-indigo-100",
    hex: "#e0e7ff",
    r: 224,
    g: 231,
    b: 255,
    rgb: "224,231,255",
  },
  {
    code: "bg-indigo-200",
    hex: "#c7d2fe",
    r: 199,
    g: 210,
    b: 254,
    rgb: "199,210,254",
  },
  {
    code: "bg-indigo-300",
    hex: "#a5b4fc",
    r: 165,
    g: 180,
    b: 252,
    rgb: "165,180,252",
  },
  {
    code: "bg-indigo-400",
    hex: "#818cf8",
    r: 129,
    g: 140,
    b: 248,
    rgb: "129,140,248",
  },
  {
    code: "bg-indigo-500",
    hex: "#6366f1",
    r: 99,
    g: 102,
    b: 241,
    rgb: "99,102,241",
  },
  {
    code: "bg-indigo-600",
    hex: "#4f46e5",
    r: 79,
    g: 70,
    b: 229,
    rgb: "79,70,229",
  },
  {
    code: "bg-indigo-700",
    hex: "#4338ca",
    r: 67,
    g: 56,
    b: 202,
    rgb: "67,56,202",
  },
  {
    code: "bg-indigo-800",
    hex: "#3730a3",
    r: 55,
    g: 48,
    b: 163,
    rgb: "55,48,163",
  },
  {
    code: "bg-indigo-900",
    hex: "#312e81",
    r: 49,
    g: 46,
    b: 129,
    rgb: "49,46,129",
  },
  {
    code: "bg-indigo-950",
    hex: "#1e1b4b",
    r: 30,
    g: 27,
    b: 75,
    rgb: "30,27,75",
  },
  {
    code: "bg-violet-50",
    hex: "#f5f3ff",
    r: 245,
    g: 243,
    b: 255,
    rgb: "245,243,255",
  },
  {
    code: "bg-violet-100",
    hex: "#ede9fe",
    r: 237,
    g: 233,
    b: 254,
    rgb: "237,233,254",
  },
  {
    code: "bg-violet-200",
    hex: "#ddd6fe",
    r: 221,
    g: 214,
    b: 254,
    rgb: "221,214,254",
  },
  {
    code: "bg-violet-300",
    hex: "#c4b5fd",
    r: 196,
    g: 181,
    b: 253,
    rgb: "196,181,253",
  },
  {
    code: "bg-violet-400",
    hex: "#a78bfa",
    r: 167,
    g: 139,
    b: 250,
    rgb: "167,139,250",
  },
  {
    code: "bg-violet-500",
    hex: "#8b5cf6",
    r: 139,
    g: 92,
    b: 246,
    rgb: "139,92,246",
  },
  {
    code: "bg-violet-600",
    hex: "#7c3aed",
    r: 124,
    g: 58,
    b: 237,
    rgb: "124,58,237",
  },
  {
    code: "bg-violet-700",
    hex: "#6d28d9",
    r: 109,
    g: 40,
    b: 217,
    rgb: "109,40,217",
  },
  {
    code: "bg-violet-800",
    hex: "#5b21b6",
    r: 91,
    g: 33,
    b: 182,
    rgb: "91,33,182",
  },
  {
    code: "bg-violet-900",
    hex: "#4c1d95",
    r: 76,
    g: 29,
    b: 149,
    rgb: "76,29,149",
  },
  {
    code: "bg-violet-950",
    hex: "#2e1065",
    r: 46,
    g: 16,
    b: 101,
    rgb: "46,16,101",
  },
  {
    code: "bg-purple-50",
    hex: "#faf5ff",
    r: 250,
    g: 245,
    b: 255,
    rgb: "250,245,255",
  },
  {
    code: "bg-purple-100",
    hex: "#f3e8ff",
    r: 243,
    g: 232,
    b: 255,
    rgb: "243,232,255",
  },
  {
    code: "bg-purple-200",
    hex: "#e9d5ff",
    r: 233,
    g: 213,
    b: 255,
    rgb: "233,213,255",
  },
  {
    code: "bg-purple-300",
    hex: "#d8b4fe",
    r: 216,
    g: 180,
    b: 254,
    rgb: "216,180,254",
  },
  {
    code: "bg-purple-400",
    hex: "#c084fc",
    r: 192,
    g: 132,
    b: 252,
    rgb: "192,132,252",
  },
  {
    code: "bg-purple-500",
    hex: "#a855f7",
    r: 168,
    g: 85,
    b: 247,
    rgb: "168,85,247",
  },
  {
    code: "bg-purple-600",
    hex: "#9333ea",
    r: 147,
    g: 51,
    b: 234,
    rgb: "147,51,234",
  },
  {
    code: "bg-purple-700",
    hex: "#7e22ce",
    r: 126,
    g: 34,
    b: 206,
    rgb: "126,34,206",
  },
  {
    code: "bg-purple-800",
    hex: "#6b21a8",
    r: 107,
    g: 33,
    b: 168,
    rgb: "107,33,168",
  },
  {
    code: "bg-purple-900",
    hex: "#581c87",
    r: 88,
    g: 28,
    b: 135,
    rgb: "88,28,135",
  },
  {
    code: "bg-purple-950",
    hex: "#3b0764",
    r: 59,
    g: 7,
    b: 100,
    rgb: "59,7,100",
  },
  {
    code: "bg-fuchsia-50",
    hex: "#fdf4ff",
    r: 253,
    g: 244,
    b: 255,
    rgb: "253,244,255",
  },
  {
    code: "bg-fuchsia-100",
    hex: "#fae8ff",
    r: 250,
    g: 232,
    b: 255,
    rgb: "250,232,255",
  },
  {
    code: "bg-fuchsia-200",
    hex: "#f5d0fe",
    r: 245,
    g: 208,
    b: 254,
    rgb: "245,208,254",
  },
  {
    code: "bg-fuchsia-300",
    hex: "#f0abfc",
    r: 240,
    g: 171,
    b: 252,
    rgb: "240,171,252",
  },
  {
    code: "bg-fuchsia-400",
    hex: "#e879f9",
    r: 232,
    g: 121,
    b: 249,
    rgb: "232,121,249",
  },
  {
    code: "bg-fuchsia-500",
    hex: "#d946ef",
    r: 217,
    g: 70,
    b: 239,
    rgb: "217,70,239",
  },
  {
    code: "bg-fuchsia-600",
    hex: "#c026d3",
    r: 192,
    g: 38,
    b: 211,
    rgb: "192,38,211",
  },
  {
    code: "bg-fuchsia-700",
    hex: "#a21caf",
    r: 162,
    g: 28,
    b: 175,
    rgb: "162,28,175",
  },
  {
    code: "bg-fuchsia-800",
    hex: "#86198f",
    r: 134,
    g: 25,
    b: 143,
    rgb: "134,25,143",
  },
  {
    code: "bg-fuchsia-900",
    hex: "#701a75",
    r: 112,
    g: 26,
    b: 117,
    rgb: "112,26,117",
  },
  {
    code: "bg-fuchsia-950",
    hex: "#4a044e",
    r: 74,
    g: 4,
    b: 78,
    rgb: "74,4,78",
  },
  {
    code: "bg-pink-50",
    hex: "#fdf2f8",
    r: 253,
    g: 242,
    b: 248,
    rgb: "253,242,248",
  },
  {
    code: "bg-pink-100",
    hex: "#fce7f3",
    r: 252,
    g: 231,
    b: 243,
    rgb: "252,231,243",
  },
  {
    code: "bg-pink-200",
    hex: "#fbcfe8",
    r: 251,
    g: 207,
    b: 232,
    rgb: "251,207,232",
  },
  {
    code: "bg-pink-300",
    hex: "#f9a8d4",
    r: 249,
    g: 168,
    b: 212,
    rgb: "249,168,212",
  },
  {
    code: "bg-pink-400",
    hex: "#f472b6",
    r: 244,
    g: 114,
    b: 182,
    rgb: "244,114,182",
  },
  {
    code: "bg-pink-500",
    hex: "#ec4899",
    r: 236,
    g: 72,
    b: 153,
    rgb: "236,72,153",
  },
  {
    code: "bg-pink-600",
    hex: "#db2777",
    r: 219,
    g: 39,
    b: 119,
    rgb: "219,39,119",
  },
  {
    code: "bg-pink-700",
    hex: "#be185d",
    r: 190,
    g: 24,
    b: 93,
    rgb: "190,24,93",
  },
  {
    code: "bg-pink-800",
    hex: "#9d174d",
    r: 157,
    g: 23,
    b: 77,
    rgb: "157,23,77",
  },
  {
    code: "bg-pink-900",
    hex: "#831843",
    r: 131,
    g: 24,
    b: 67,
    rgb: "131,24,67",
  },
  {
    code: "bg-pink-950",
    hex: "#500724",
    r: 80,
    g: 7,
    b: 36,
    rgb: "80,7,36",
  },
  {
    code: "bg-rose-50",
    hex: "#fff1f2",
    r: 255,
    g: 241,
    b: 242,
    rgb: "255,241,242",
  },
  {
    code: "bg-rose-100",
    hex: "#ffe4e6",
    r: 255,
    g: 228,
    b: 230,
    rgb: "255,228,230",
  },
  {
    code: "bg-rose-200",
    hex: "#fecdd3",
    r: 254,
    g: 205,
    b: 211,
    rgb: "254,205,211",
  },
  {
    code: "bg-rose-300",
    hex: "#fda4af",
    r: 253,
    g: 164,
    b: 175,
    rgb: "253,164,175",
  },
  {
    code: "bg-rose-400",
    hex: "#fb7185",
    r: 251,
    g: 113,
    b: 133,
    rgb: "251,113,133",
  },
  {
    code: "bg-rose-500",
    hex: "#f43f5e",
    r: 244,
    g: 63,
    b: 94,
    rgb: "244,63,94",
  },
  {
    code: "bg-rose-600",
    hex: "#e11d48",
    r: 225,
    g: 29,
    b: 72,
    rgb: "225,29,72",
  },
  {
    code: "bg-rose-700",
    hex: "#be123c",
    r: 190,
    g: 18,
    b: 60,
    rgb: "190,18,60",
  },
  {
    code: "bg-rose-800",
    hex: "#9f1239",
    r: 159,
    g: 18,
    b: 57,
    rgb: "159,18,57",
  },
  {
    code: "bg-rose-900",
    hex: "#881337",
    r: 136,
    g: 19,
    b: 55,
    rgb: "136,19,55",
  },
  {
    code: "bg-rose-950",
    hex: "#4c0519",
    r: 76,
    g: 5,
    b: 25,
    rgb: "76,5,25",
  },
];

// const colorRandom = colores[Math.floor(Math.random() * colores.length)];

export default colores;
