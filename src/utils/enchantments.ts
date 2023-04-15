export interface Enchantment {
	name: string
	viewName: string,
	maxLevel: number,
	incompatibleWith?: string[]
}

export const Enchantments: { [enchantmentName: string]: Enchantment } = {
	Infinity: {
		name: "Infinity",
		viewName: "Бесконечность",
		incompatibleWith: ["Mending"],
		maxLevel: 1
	},
	Bane_of_Arthropods: {
		name: "Bane_of_Arthropods",
		viewName: "Бич членистоногих",
		incompatibleWith: ["Smite", "Sharpness"],
		maxLevel: 5
	},
	Quick_Charge: {
		name: "Quick_Charge",
		viewName: "Быстрая перезарядка",
		maxLevel: 3
	},
	Luck_of_the_Sea: {
		name: "Luck_of_the_Sea",
		viewName: "Везучий рыбак",
		maxLevel: 3
	},
	Loyalty: {
		name: "Loyalty",
		viewName: "Верность",
		incompatibleWith: ["Riptide"],
		maxLevel: 3
	},
	Blast_Protection: {
		name: "Blast_Protection",
		viewName: "Взрывоустойчивостьт",
		incompatibleWith: ["Fire Protection", "Protection", "Projectile Protection"],
		maxLevel: 4
	},
	Flame: {
		name: "Flame",
		viewName: "Горящая стрела",
		maxLevel: 1
	},
	Channeling: {
		name: "Channeling",
		viewName: "Громовержец",
		incompatibleWith: ["Riptide"],
		maxLevel: 1
	},
	Looting: {
		name: "Looting",
		viewName: "Добыча",
		maxLevel: 3
	},
	Fire_Aspect: {
		name: "Fire_Aspect",
		viewName: "Заговор огня",
		maxLevel: 2
	},
	Projectile_Protection: {
		name: "Projectile_Protection",
		viewName: "Защита от снарядов",
		incompatibleWith: ["Protection", "Blast Protection", "Fire Protection"],
		maxLevel: 4
	},
	Protection: {
		name: "Protection",
		viewName: "Защита",
		incompatibleWith: ["Blast Protection", "Fire Protection", "Projectile Protection"],
		maxLevel: 4
	},
	Frost_Walker: {
		name: "Frost_Walker",
		viewName: "Ледоход",
		incompatibleWith: ["Depth Strider"],
		maxLevel: 2
	},
	Smite: {
		name: "Smite",
		viewName: "Небесная кара",
		incompatibleWith: ["Bane of Arthropods", "Sharpness"],
		maxLevel: 5
	},
	Feather_Falling: {
		name: "Feather_Falling",
		viewName: "Невесомость",
		maxLevel: 4
	},
	Fire_Protection: {
		name: "Fire_Protection",
		viewName: "Огнеупорность",
		incompatibleWith: ["Blast Protection", "Protection", "Projectile Protection"],
		maxLevel: 4
	},
	Sharpness: {
		name: "Sharpness",
		viewName: "Острота",
		incompatibleWith: ["Bane of Arthropods", "Smite"],
		maxLevel: 5
	},
	Punch: {
		name: "Punch",
		viewName: "Отбрасывание",
		maxLevel: 2
	},
	Knockback: {
		name: "Knockback",
		viewName: "Отдача",
		maxLevel: 2
	},
	Depth_Strider: {
		name: "Depth_Strider",
		viewName: "Подводная ходьба",
		incompatibleWith: ["Frost Walker"],
		maxLevel: 3
	},
	Aqua_Affinity: {
		name: "Aqua_Affinity",
		viewName: "Подводник",
		maxLevel: 1
	},
	Respiration: {
		name: "Respiration",
		viewName: "Подводное дыхание",
		maxLevel: 3
	},
	Mending: {
		name: "Mending",
		viewName: "Починка",
		incompatibleWith: ["Infinity"],
		maxLevel: 1
	},
	Lure: {
		name: "Lure",
		viewName: "Приманка",
		maxLevel: 3
	},
	Swift_Sneak: {
		name: "Swift_Sneak",
		viewName: "Проворство",
		maxLevel: 3
	},
	Curse_of_Binding: {
		name: "Curse_of_Binding",
		viewName: "Проклятие несъёмности",
		maxLevel: 1
	},
	Curse_of_Vanishing: {
		name: "Curse_of_Vanishing",
		viewName: "Проклятье утраты",
		maxLevel: 1
	},
	Impaling: {
		name: "Impaling",
		viewName: "Пронзатель",
		maxLevel: 5
	},
	Piercing: {
		name: "Piercing",
		viewName: "Пронзающая стрела",
		incompatibleWith: ["Multishot"],
		maxLevel: 4
	},
	Unbreaking: {
		name: "Unbreaking",
		viewName: "Прочность",
		maxLevel: 3
	},
	Sweeping_Edge: {
		name: "Sweeping_Edge",
		viewName: "Разящий клинок",
		maxLevel: 3
	},
	Power: {
		name: "Power",
		viewName: "Сила",
		maxLevel: 5
	},
	Soul_Speed: {
		name: "Soul_Speed",
		viewName: "Скорость души",
		maxLevel: 3
	},
	Multishot: {
		name: "Multishot",
		viewName: "Тройной выстрел",
		incompatibleWith: ["Piercing"],
		maxLevel: 1
	},
	Riptide: {
		name: "Riptide",
		viewName: "Тягун",
		incompatibleWith: ["Channeling", "Riptide"],
		maxLevel: 3
	},
	Fortune: {
		name: "Fortune",
		viewName: "Удача",
		incompatibleWith: ["Silk Touch"],
		maxLevel: 3
	},
	Silk_Touch: {
		name: "Silk_Touch",
		viewName: "Шёлковое касание",
		incompatibleWith: ["Fortune"],
		maxLevel: 1
	},
	Thorns: {
		name: "Thorns",
		viewName: "Шипы",
		maxLevel: 3
	},
	Efficiency: {
		name: "Efficiency",
		viewName: "Эффективность",
		maxLevel: 5
	},
}

export const AllEnchants = Object.entries(Enchantments).map(([enchantName, Enchant]) => Enchant)


export const CommonEnchants = [
	Enchantments.Mending,
	Enchantments.Curse_of_Binding,
	Enchantments.Curse_of_Vanishing,
	Enchantments.Unbreaking,
]

export const SwordEnchants = [
	...CommonEnchants,
	Enchantments.Bane_of_Arthropods,
	Enchantments.Looting,
	Enchantments.Fire_Aspect,
	Enchantments.Smite,
	Enchantments.Sharpness,
	Enchantments.Knockback,
	Enchantments.Sweeping_Edge,
]

export const EquipmentEnchants = [
	...CommonEnchants,
	Enchantments.Fortune,
	Enchantments.Efficiency,
	Enchantments.Silk_Touch,
]

export const AxeEnchants = [
	...CommonEnchants,
	...EquipmentEnchants,
	Enchantments.Bane_of_Arthropods,
	Enchantments.Smite,
	Enchantments.Sharpness,
]



export const ArmorEnchants = [
	...CommonEnchants,
	Enchantments.Blast_Protection,
	Enchantments.Projectile_Protection,
	Enchantments.Protection,
	Enchantments.Fire_Protection,
	Enchantments.Thorns

]

export const HelmetEnchants = [
	...ArmorEnchants,
	Enchantments.Aqua_Affinity,
	Enchantments.Respiration,
]

export const BootsEnchants = [
	...ArmorEnchants,
	Enchantments.Frost_Walker,
	Enchantments.Feather_Falling,
	Enchantments.Soul_Speed
]

export const LeggingsEnchant = [
	...ArmorEnchants,
	Enchantments.Swift_Sneak
]

export const TridentEnchants = {
	availableEnchants: [
		...CommonEnchants,
		Enchantments.Loyalty,
		Enchantments.Channeling,
		Enchantments.Riptide
	]
}

export const BowEnchants = [
	...CommonEnchants,
	Enchantments.Infinity,
	Enchantments.Punch,
	Enchantments.Power,
]


export const CrossBow = [
	...CommonEnchants,
	Enchantments.Quick_Charge,
	Enchantments.Piercing,
	Enchantments.Multishot,
]

export const FishingRodEnchants = [
	...CommonEnchants,
	Enchantments.Lure,
	Enchantments.Luck_of_the_Sea
]