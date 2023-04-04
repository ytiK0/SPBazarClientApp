const NoStackableItems = [
	"Barrier",
	"Flint_and_Steel",
	"Boat",
	"Crossbow",
	"Bucket",
	"Bundle",
	"Map",
	"Carrot_on_a_Stick",
	"Fishing_Rod",
	"Boots",
	"Chestplate",
	"Helmet",
	"Leggings",
	"Clock",
	"Compass",
	"Axe",
	"Hoe",
	"Sword",
	"Shovel",
	"Pickaxe",
	"Horn",
	"Horse_Armor",
	"Book",
	"Minecart",
	"Stew",
	"Music_Disc",
	"Nether_Star",
	"Saddle",
	"Shears",
	"Spyglass",
	"Totem_of_Undying",
	"Trident",
	"Bed"
];

export const IsNoStackableItem = (itemName: string): boolean => {
	return NoStackableItems.some(item => itemName.includes(item));
};