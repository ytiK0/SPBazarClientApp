export enum ItemTypes {
	Crossbow = "Crossbow",
	Fishing_Rod = "Fishing_Rod",
	Boots = "Boots",
	Chestplate = "Chestplate",
	Helmet = "Helmet",
	Leggings = "Leggings",
	Axe = "Axe",
	Sword = "Sword",
	Equipment = "Equipment",
	Enchanted_Book = "Enchanted_Book",
	Trident = "Trident",
}

export interface IIcon {
	name: string,
	iconRef: string,
	isStackable: boolean,
	isEnchantable: boolean,
	itemType?: ItemTypes
}

export const icons: IIcon[] = [
	{
		"name": "Acacia_Boat",
		"iconRef": "Acacia_Boat.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Acacia_Boat_with_Chest",
		"iconRef": "Acacia_Boat_with_Chest.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Acacia_Door",
		"iconRef": "Acacia_Door.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Acacia_Sign",
		"iconRef": "Acacia_Sign.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Amethyst_Shard",
		"iconRef": "Amethyst_Shard.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Apple",
		"iconRef": "Apple.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Armor_Stand",
		"iconRef": "Armor_Stand.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Arrow",
		"iconRef": "Arrow.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Arrow_Loaded_Crossbow",
		"iconRef": "Arrow_Loaded_Crossbow.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Crossbow
	},
	{
		"name": "Arrow_of_Decay",
		"iconRef": "Arrow_of_Decay.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Arrow_of_Fire_Resistance",
		"iconRef": "Arrow_of_Fire_Resistance.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Arrow_of_Harming",
		"iconRef": "Arrow_of_Harming.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Arrow_of_Healing",
		"iconRef": "Arrow_of_Healing.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Arrow_of_Invisibility",
		"iconRef": "Arrow_of_Invisibility.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Arrow_of_Leaping",
		"iconRef": "Arrow_of_Leaping.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Arrow_of_Luck",
		"iconRef": "Arrow_of_Luck.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Arrow_of_Night_Vision",
		"iconRef": "Arrow_of_Night_Vision.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Arrow_of_Poison",
		"iconRef": "Arrow_of_Poison.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Arrow_of_Regeneration",
		"iconRef": "Arrow_of_Regeneration.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Arrow_of_Slowness",
		"iconRef": "Arrow_of_Slowness.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Arrow_of_Slow_Falling",
		"iconRef": "Arrow_of_Slow_Falling.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Arrow_of_Strength",
		"iconRef": "Arrow_of_Strength.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Arrow_of_Swiftness",
		"iconRef": "Arrow_of_Swiftness.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Arrow_of_the_Turtle_Master",
		"iconRef": "Arrow_of_the_Turtle_Master.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Arrow_of_Water_Breathing",
		"iconRef": "Arrow_of_Water_Breathing.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Arrow_of_Weakness",
		"iconRef": "Arrow_of_Weakness.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Baked_Potato",
		"iconRef": "Baked_Potato.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Bamboo",
		"iconRef": "Bamboo.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Banner_Pattern",
		"iconRef": "Banner_Pattern.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Barrier",
		"iconRef": "Barrier.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Beetroot",
		"iconRef": "Beetroot.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Beetroot_Seeds",
		"iconRef": "Beetroot_Seeds.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Beetroot_Soup",
		"iconRef": "Beetroot_Soup.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Bell",
		"iconRef": "Bell.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Birch_Boat",
		"iconRef": "Birch_Boat.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Birch_Boat_with_Chest",
		"iconRef": "Birch_Boat_with_Chest.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Birch_Door",
		"iconRef": "Birch_Door.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Birch_Sign",
		"iconRef": "Birch_Sign.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Black_Bed",
		"iconRef": "Black_Bed.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Black_Candle",
		"iconRef": "Black_Candle.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Black_Dye",
		"iconRef": "Black_Dye.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Blaze_Powder",
		"iconRef": "Blaze_Powder.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Blaze_Rod",
		"iconRef": "Blaze_Rod.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Blue_Bed",
		"iconRef": "Blue_Bed.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Blue_Candle",
		"iconRef": "Blue_Candle.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Blue_Dye",
		"iconRef": "Blue_Dye.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Bone",
		"iconRef": "Bone.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Bone_Meal",
		"iconRef": "Bone_Meal.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Book",
		"iconRef": "Book.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Book_and_Quill",
		"iconRef": "Book_and_Quill.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Bottle_",
		"iconRef": "Bottle_.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Bow",
		"iconRef": "Bow.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Bowl",
		"iconRef": "Bowl.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Bread",
		"iconRef": "Bread.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Brewing_Stand",
		"iconRef": "Brewing_Stand.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Brick",
		"iconRef": "Brick.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Broken_Elytra",
		"iconRef": "Broken_Elytra.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Brown_Bed",
		"iconRef": "Brown_Bed.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Brown_Candle",
		"iconRef": "Brown_Candle.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Brown_Dye",
		"iconRef": "Brown_Dye.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Bucket",
		"iconRef": "Bucket.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Bucket_of_Axolotl",
		"iconRef": "Bucket_of_Axolotl.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Bucket_of_Cod",
		"iconRef": "Bucket_of_Cod.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Bucket_of_Mud",
		"iconRef": "Bucket_of_Mud.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Bucket_of_Pufferfish",
		"iconRef": "Bucket_of_Pufferfish.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Bucket_of_Salmon",
		"iconRef": "Bucket_of_Salmon.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Bucket_of_Tadpole",
		"iconRef": "Bucket_of_Tadpole.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Bucket_of_Tropical_Fish",
		"iconRef": "Bucket_of_Tropical_Fish.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Bundle",
		"iconRef": "Bundle.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Bundle_Filled",
		"iconRef": "Bundle_Filled.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Buried_Treasure_Map",
		"iconRef": "Buried_Treasure_Map.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Cake",
		"iconRef": "Cake.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Campfire",
		"iconRef": "Campfire.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Candle",
		"iconRef": "Candle.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Carrot",
		"iconRef": "Carrot.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Carrot_on_a_Stick",
		"iconRef": "Carrot_on_a_Stick.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Cast_Fishing_Rod",
		"iconRef": "Cast_Fishing_Rod.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Fishing_Rod
	},
	{
		"name": "Cauldron",
		"iconRef": "Cauldron.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Chain",
		"iconRef": "Chain.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Chainmail_Boots",
		"iconRef": "Chainmail_Boots.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Boots
	},
	{
		"name": "Chainmail_Chestplate",
		"iconRef": "Chainmail_Chestplate.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Chestplate
	},
	{
		"name": "Chainmail_Helmet",
		"iconRef": "Chainmail_Helmet.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Helmet
	},
	{
		"name": "Chainmail_Leggings",
		"iconRef": "Chainmail_Leggings.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Leggings
	},
	{
		"name": "Charcoal",
		"iconRef": "Charcoal.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Chorus_Fruit",
		"iconRef": "Chorus_Fruit.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Clay_Ball",
		"iconRef": "Clay_Ball.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Clock",
		"iconRef": "Clock.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Coal",
		"iconRef": "Coal.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Cocoa_Beans",
		"iconRef": "Cocoa_Beans.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Compass",
		"iconRef": "Compass.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Cooked_Chicken",
		"iconRef": "Cooked_Chicken.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Cooked_Cod",
		"iconRef": "Cooked_Cod.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Cooked_Mutton",
		"iconRef": "Cooked_Mutton.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Cooked_Porkchop",
		"iconRef": "Cooked_Porkchop.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Cooked_Rabbit",
		"iconRef": "Cooked_Rabbit.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Cooked_Salmon",
		"iconRef": "Cooked_Salmon.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Cookie",
		"iconRef": "Cookie.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Copper_Ingot",
		"iconRef": "Copper_Ingot.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Crimson_Door",
		"iconRef": "Crimson_Door.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Crimson_Sign",
		"iconRef": "Crimson_Sign.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Crossbow",
		"iconRef": "Crossbow.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Crossbow
	},
	{
		"name": "Crossbow_Pull_0",
		"iconRef": "Crossbow_Pull_0.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Crossbow
	},
	{
		"name": "Crossbow_Pull_1",
		"iconRef": "Crossbow_Pull_1.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Crossbow
	},
	{
		"name": "Crossbow_Pull_2",
		"iconRef": "Crossbow_Pull_2.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Crossbow
	},
	{
		"name": "Cyan_Bed",
		"iconRef": "Cyan_Bed.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Cyan_Candle",
		"iconRef": "Cyan_Candle.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Cyan_Dye",
		"iconRef": "Cyan_Dye.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Dark_Oak_Boat",
		"iconRef": "Dark_Oak_Boat.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Dark_Oak_Boat_with_Chest",
		"iconRef": "Dark_Oak_Boat_with_Chest.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Dark_Oak_Door",
		"iconRef": "Dark_Oak_Door.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Dark_Oak_Sign",
		"iconRef": "Dark_Oak_Sign.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Diamond",
		"iconRef": "Diamond.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Diamond_Axe",
		"iconRef": "Diamond_Axe.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Axe
	},
	{
		"name": "Diamond_Boots",
		"iconRef": "Diamond_Boots.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Boots
	},
	{
		"name": "Diamond_Chestplate",
		"iconRef": "Diamond_Chestplate.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Chestplate
	},
	{
		"name": "Diamond_Helmet",
		"iconRef": "Diamond_Helmet.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Helmet
	},
	{
		"name": "Diamond_Hoe",
		"iconRef": "Diamond_Hoe.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Equipment
	},
	{
		"name": "Diamond_Horse_Armor",
		"iconRef": "Diamond_Horse_Armor.png",
		"isStackable": false,
		"isEnchantable": false,
	},
	{
		"name": "Diamond_Leggings",
		"iconRef": "Diamond_Leggings.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Leggings
	},
	{
		"name": "Diamond_Pickaxe",
		"iconRef": "Diamond_Pickaxe.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Equipment
	},
	{
		"name": "Diamond_Shovel",
		"iconRef": "Diamond_Shovel.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Equipment
	},
	{
		"name": "Diamond_Sword",
		"iconRef": "Diamond_Sword.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Sword
	},
	{
		"name": "Disc_Fragment_5",
		"iconRef": "Disc_Fragment_5.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Drago",
		"iconRef": "Drago.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Dried_Kelp",
		"iconRef": "Dried_Kelp.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "EarthRuby",
		"iconRef": "EarthRuby.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Echo_Shard",
		"iconRef": "Echo_Shard.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Egg",
		"iconRef": "Egg.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Elytra",
		"iconRef": "Elytra.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Emerald",
		"iconRef": "Emerald.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Empty_Map",
		"iconRef": "Empty_Map.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Enchanted_Book",
		"iconRef": "Enchanted_Book.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Enchanted_Book
	},
	{
		"name": "Ender_Pearl",
		"iconRef": "Ender_Pearl.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "End_Crystal",
		"iconRef": "End_Crystal.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Eye_of_Ender",
		"iconRef": "Eye_of_Ender.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Fancy_Feather",
		"iconRef": "Fancy_Feather.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Feather",
		"iconRef": "Feather.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Fermented_Spider_Eye",
		"iconRef": "Fermented_Spider_Eye.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Firework_Loaded_Crossbow",
		"iconRef": "Firework_Loaded_Crossbow.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Crossbow
	},
	{
		"name": "Firework_Rocket",
		"iconRef": "Firework_Rocket.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Firework_Star",
		"iconRef": "Firework_Star.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Fire_Charge",
		"iconRef": "Fire_Charge.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Fishing_Rod",
		"iconRef": "Fishing_Rod.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Fishing_Rod
	},
	{
		"name": "Flint",
		"iconRef": "Flint.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Flint_and_Steel",
		"iconRef": "Flint_and_Steel.png",
		"isStackable": false,
		"isEnchantable": false,
	},
	{
		"name": "Flower_Pot",
		"iconRef": "Flower_Pot.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Ghast_Tear",
		"iconRef": "Ghast_Tear.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Glass_Bottle",
		"iconRef": "Glass_Bottle.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Glistering_Melon_Slice",
		"iconRef": "Glistering_Melon_Slice.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Glowstone_Dust",
		"iconRef": "Glowstone_Dust.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Glow_Berries",
		"iconRef": "Glow_Berries.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Glow_Ink_Sac",
		"iconRef": "Glow_Ink_Sac.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Glow_Item_Frame",
		"iconRef": "Glow_Item_Frame.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Goat_Horn",
		"iconRef": "Goat_Horn.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Golden_Apple",
		"iconRef": "Golden_Apple.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Golden_Axe",
		"iconRef": "Golden_Axe.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Axe
	},
	{
		"name": "Golden_Boots",
		"iconRef": "Golden_Boots.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Boots
	},
	{
		"name": "Golden_Carrot",
		"iconRef": "Golden_Carrot.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Golden_Chestplate",
		"iconRef": "Golden_Chestplate.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Chestplate
	},
	{
		"name": "Golden_Helmet",
		"iconRef": "Golden_Helmet.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Helmet
	},
	{
		"name": "Golden_Hoe",
		"iconRef": "Golden_Hoe.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Equipment
	},
	{
		"name": "Golden_Horse_Armor",
		"iconRef": "Golden_Horse_Armor.png",
		"isStackable": false,
		"isEnchantable": false,
	},
	{
		"name": "Golden_Leggings",
		"iconRef": "Golden_Leggings.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Leggings
	},
	{
		"name": "Golden_Pickaxe",
		"iconRef": "Golden_Pickaxe.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Equipment
	},
	{
		"name": "Golden_Shovel",
		"iconRef": "Golden_Shovel.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Equipment
	},
	{
		"name": "Golden_Sword",
		"iconRef": "Golden_Sword.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Sword
	},
	{
		"name": "Gold_Ingot",
		"iconRef": "Gold_Ingot.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Gold_Nugget",
		"iconRef": "Gold_Nugget.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Gray_Bed",
		"iconRef": "Gray_Bed.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Gray_Candle",
		"iconRef": "Gray_Candle.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Gray_Dye",
		"iconRef": "Gray_Dye.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Green_Bed",
		"iconRef": "Green_Bed.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Green_Candle",
		"iconRef": "Green_Candle.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Green_Dye",
		"iconRef": "Green_Dye.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Gunpowder",
		"iconRef": "Gunpowder.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Hanging_Roots",
		"iconRef": "Hanging_Roots.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Heart_of_the_Sea",
		"iconRef": "Heart_of_the_Sea.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Honeycomb",
		"iconRef": "Honeycomb.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Honey_Bottle",
		"iconRef": "Honey_Bottle.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Hopper",
		"iconRef": "Hopper.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Horn",
		"iconRef": "Horn.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Ink_Sac",
		"iconRef": "Ink_Sac.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Iron_Axe",
		"iconRef": "Iron_Axe.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Axe
	},
	{
		"name": "Iron_Boots",
		"iconRef": "Iron_Boots.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Boots
	},
	{
		"name": "Iron_Chestplate",
		"iconRef": "Iron_Chestplate.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Chestplate
	},
	{
		"name": "Iron_Door",
		"iconRef": "Iron_Door.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Iron_Helmet",
		"iconRef": "Iron_Helmet.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Helmet
	},
	{
		"name": "Iron_Hoe",
		"iconRef": "Iron_Hoe.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Equipment
	},
	{
		"name": "Iron_Horse_Armor",
		"iconRef": "Iron_Horse_Armor.png",
		"isStackable": false,
		"isEnchantable": false,
	},
	{
		"name": "Iron_Ingot",
		"iconRef": "Iron_Ingot.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Iron_Leggings",
		"iconRef": "Iron_Leggings.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Leggings
	},
	{
		"name": "Iron_Nugget",
		"iconRef": "Iron_Nugget.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Iron_Pickaxe",
		"iconRef": "Iron_Pickaxe.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Equipment
	},
	{
		"name": "Iron_Shovel",
		"iconRef": "Iron_Shovel.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Equipment
	},
	{
		"name": "Iron_Sword",
		"iconRef": "Iron_Sword.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Sword
	},
	{
		"name": "Item_Frame",
		"iconRef": "Item_Frame.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Jungle_Boat",
		"iconRef": "Jungle_Boat.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Jungle_Boat_with_Chest",
		"iconRef": "Jungle_Boat_with_Chest.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Jungle_Door",
		"iconRef": "Jungle_Door.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Jungle_Sign",
		"iconRef": "Jungle_Sign.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Kelp",
		"iconRef": "Kelp.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Knowledge_Book",
		"iconRef": "Knowledge_Book.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Lantern",
		"iconRef": "Lantern.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Lapis_Lazuli",
		"iconRef": "Lapis_Lazuli.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Lava_Bucket",
		"iconRef": "Lava_Bucket.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Lead",
		"iconRef": "Lead.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Leather",
		"iconRef": "Leather.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Leather_Boots",
		"iconRef": "Leather_Boots.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Boots
	},
	{
		"name": "Leather_Cap",
		"iconRef": "Leather_Cap.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Leather_Horse_Armor",
		"iconRef": "Leather_Horse_Armor.png",
		"isStackable": false,
		"isEnchantable": false,
	},
	{
		"name": "Leather_Pants",
		"iconRef": "Leather_Pants.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Leather_Tunic",
		"iconRef": "Leather_Tunic.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Lever",
		"iconRef": "Lever.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Light_0",
		"iconRef": "Light_0.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Light_1",
		"iconRef": "Light_1.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Light_10",
		"iconRef": "Light_10.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Light_11",
		"iconRef": "Light_11.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Light_12",
		"iconRef": "Light_12.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Light_13",
		"iconRef": "Light_13.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Light_14",
		"iconRef": "Light_14.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Light_15",
		"iconRef": "Light_15.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Light_2",
		"iconRef": "Light_2.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Light_3",
		"iconRef": "Light_3.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Light_4",
		"iconRef": "Light_4.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Light_5",
		"iconRef": "Light_5.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Light_6",
		"iconRef": "Light_6.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Light_7",
		"iconRef": "Light_7.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Light_8",
		"iconRef": "Light_8.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Light_9",
		"iconRef": "Light_9.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Light_Blue_Bed",
		"iconRef": "Light_Blue_Bed.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Light_Blue_Candle",
		"iconRef": "Light_Blue_Candle.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Light_Blue_Dye",
		"iconRef": "Light_Blue_Dye.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Light_Gray_Bed",
		"iconRef": "Light_Gray_Bed.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Light_Gray_Candle",
		"iconRef": "Light_Gray_Candle.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Light_Gray_Dye",
		"iconRef": "Light_Gray_Dye.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Lily_Pad",
		"iconRef": "Lily_Pad.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Lime_Bed",
		"iconRef": "Lime_Bed.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Lime_Candle",
		"iconRef": "Lime_Candle.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Lime_Dye",
		"iconRef": "Lime_Dye.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Locked_Map",
		"iconRef": "Locked_Map.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Magenta_Bed",
		"iconRef": "Magenta_Bed.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Magenta_Candle",
		"iconRef": "Magenta_Candle.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Magenta_Dye",
		"iconRef": "Magenta_Dye.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Magma_Cream",
		"iconRef": "Magma_Cream.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Mangrove_Boat",
		"iconRef": "Mangrove_Boat.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Mangrove_Boat_with_Chest",
		"iconRef": "Mangrove_Boat_with_Chest.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Mangrove_Door",
		"iconRef": "Mangrove_Door.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Mangrove_Propagule",
		"iconRef": "Mangrove_Propagule.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Mangrove_Sign",
		"iconRef": "Mangrove_Sign.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Map",
		"iconRef": "Map.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Melon_Seeds",
		"iconRef": "Melon_Seeds.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Melon_Slice",
		"iconRef": "Melon_Slice.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Milk_Bucket",
		"iconRef": "Milk_Bucket.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Minecart",
		"iconRef": "Minecart.png",
		"isStackable": false,
		"isEnchantable": false,
	},
	{
		"name": "Minecart_with_Chest",
		"iconRef": "Minecart_with_Chest.png",
		"isStackable": false,
		"isEnchantable": false,
	},
	{
		"name": "Minecart_with_Command_Block",
		"iconRef": "Minecart_with_Command_Block.png",
		"isStackable": false,
		"isEnchantable": false,
	},
	{
		"name": "Minecart_with_Furnace",
		"iconRef": "Minecart_with_Furnace.png",
		"isStackable": false,
		"isEnchantable": false,
	},
	{
		"name": "Minecart_with_Hopper",
		"iconRef": "Minecart_with_Hopper.png",
		"isStackable": false,
		"isEnchantable": false,
	},
	{
		"name": "Minecart_with_TNT",
		"iconRef": "Minecart_with_TNT.png",
		"isStackable": false,
		"isEnchantable": false,
	},
	{
		"name": "Mushroom_Stew",
		"iconRef": "Mushroom_Stew.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Music_Disc_11",
		"iconRef": "Music_Disc_11.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Music_Disc_13",
		"iconRef": "Music_Disc_13.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Music_Disc_5",
		"iconRef": "Music_Disc_5.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Music_Disc_Blocks",
		"iconRef": "Music_Disc_Blocks.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Music_Disc_Cat",
		"iconRef": "Music_Disc_Cat.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Music_Disc_Chirp",
		"iconRef": "Music_Disc_Chirp.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Music_Disc_Far",
		"iconRef": "Music_Disc_Far.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Music_Disc_Mall",
		"iconRef": "Music_Disc_Mall.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Music_Disc_Mellohi",
		"iconRef": "Music_Disc_Mellohi.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Music_Disc_Otherside",
		"iconRef": "Music_Disc_Otherside.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Music_Disc_Pigstep",
		"iconRef": "Music_Disc_Pigstep.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Music_Disc_Stal",
		"iconRef": "Music_Disc_Stal.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Music_Disc_Strad",
		"iconRef": "Music_Disc_Strad.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Music_Disc_Wait",
		"iconRef": "Music_Disc_Wait.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Music_Disc_Ward",
		"iconRef": "Music_Disc_Ward.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Name_Tag",
		"iconRef": "Name_Tag.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Nautilus_Shell",
		"iconRef": "Nautilus_Shell.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Netherite_Axe",
		"iconRef": "Netherite_Axe.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Axe
	},
	{
		"name": "Netherite_Boots",
		"iconRef": "Netherite_Boots.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Boots
	},
	{
		"name": "Netherite_Chestplate",
		"iconRef": "Netherite_Chestplate.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Chestplate
	},
	{
		"name": "Netherite_Helmet",
		"iconRef": "Netherite_Helmet.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Helmet
	},
	{
		"name": "Netherite_Hoe",
		"iconRef": "Netherite_Hoe.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Equipment
	},
	{
		"name": "Netherite_Ingot",
		"iconRef": "Netherite_Ingot.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Netherite_Leggings",
		"iconRef": "Netherite_Leggings.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Leggings
	},
	{
		"name": "Netherite_Pickaxe",
		"iconRef": "Netherite_Pickaxe.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Equipment
	},
	{
		"name": "Netherite_Scrap",
		"iconRef": "Netherite_Scrap.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Netherite_Shovel",
		"iconRef": "Netherite_Shovel.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Equipment
	},
	{
		"name": "Netherite_Sword",
		"iconRef": "Netherite_Sword.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Sword
	},
	{
		"name": "Nether_Brick",
		"iconRef": "Nether_Brick.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Nether_Quartz",
		"iconRef": "Nether_Quartz.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Nether_Sprouts",
		"iconRef": "Nether_Sprouts.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Nether_Star",
		"iconRef": "Nether_Star.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Nether_Wart",
		"iconRef": "Nether_Wart.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Oak_Boat",
		"iconRef": "Oak_Boat.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Oak_Boat_with_Chest",
		"iconRef": "Oak_Boat_with_Chest.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Oak_Door",
		"iconRef": "Oak_Door.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Oak_Sign",
		"iconRef": "Oak_Sign.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Ocean_Explorer_Map",
		"iconRef": "Ocean_Explorer_Map.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Orange_Bed",
		"iconRef": "Orange_Bed.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Orange_Candle",
		"iconRef": "Orange_Candle.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Orange_Dye",
		"iconRef": "Orange_Dye.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Painting",
		"iconRef": "Painting.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Paper",
		"iconRef": "Paper.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Phantom_Membrane",
		"iconRef": "Phantom_Membrane.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Pink_Bed",
		"iconRef": "Pink_Bed.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Pink_Candle",
		"iconRef": "Pink_Candle.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Pink_Dye",
		"iconRef": "Pink_Dye.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Pointed_Dripstone_Tip",
		"iconRef": "Pointed_Dripstone_Tip.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Poisonous_Potato",
		"iconRef": "Poisonous_Potato.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Popped_Chorus_Fruit",
		"iconRef": "Popped_Chorus_Fruit.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Potato",
		"iconRef": "Potato.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Powder_Snow_Bucket",
		"iconRef": "Powder_Snow_Bucket.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Prismarine_Crystals",
		"iconRef": "Prismarine_Crystals.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Prismarine_Shard",
		"iconRef": "Prismarine_Shard.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Pufferfish",
		"iconRef": "Pufferfish.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Pumpkin_Pie",
		"iconRef": "Pumpkin_Pie.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Pumpkin_Seeds",
		"iconRef": "Pumpkin_Seeds.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Purple_Bed",
		"iconRef": "Purple_Bed.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Purple_Candle",
		"iconRef": "Purple_Candle.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Purple_Dye",
		"iconRef": "Purple_Dye.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Rabbi",
		"iconRef": "Rabbi.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Rabbit_Hide",
		"iconRef": "Rabbit_Hide.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Rabbit_Stew",
		"iconRef": "Rabbit_Stew.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Rainbow_Bed",
		"iconRef": "Rainbow_Bed.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Raw_Beef",
		"iconRef": "Raw_Beef.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Raw_Chicken",
		"iconRef": "Raw_Chicken.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Raw_Cod",
		"iconRef": "Raw_Cod.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Raw_Copper",
		"iconRef": "Raw_Copper.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Raw_Gold",
		"iconRef": "Raw_Gold.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Raw_Iron",
		"iconRef": "Raw_Iron.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Raw_Mutton",
		"iconRef": "Raw_Mutton.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Raw_Porkchop",
		"iconRef": "Raw_Porkchop.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Raw_Rabbit",
		"iconRef": "Raw_Rabbit.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Raw_Salmon",
		"iconRef": "Raw_Salmon.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Redstone_Comparator",
		"iconRef": "Redstone_Comparator.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Redstone_Dust",
		"iconRef": "Redstone_Dust.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Redstone_Repeater",
		"iconRef": "Redstone_Repeater.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Red_Bed",
		"iconRef": "Red_Bed.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Red_Candle",
		"iconRef": "Red_Candle.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Red_Dye",
		"iconRef": "Red_Dye.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Rotten_Flesh",
		"iconRef": "Rotten_Flesh.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Saddle",
		"iconRef": "Saddle.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Scute",
		"iconRef": "Scute.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Seagrass",
		"iconRef": "Seagrass.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Sea_Pickle",
		"iconRef": "Sea_Pickle.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Shears",
		"iconRef": "Shears.png",
		"isStackable": false,
		"isEnchantable": false,
	},
	{
		"name": "Shulker_Shell",
		"iconRef": "Shulker_Shell.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Slimeball",
		"iconRef": "Slimeball.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Snowball",
		"iconRef": "Snowball.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Soul_Campfire",
		"iconRef": "Soul_Campfire.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Soul_Lantern",
		"iconRef": "Soul_Lantern.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Spectral_Arrow",
		"iconRef": "Spectral_Arrow.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Spider_Eye",
		"iconRef": "Spider_Eye.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Spruce_Boat",
		"iconRef": "Spruce_Boat.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Spruce_Boat_with_Chest",
		"iconRef": "Spruce_Boat_with_Chest.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Spruce_Door",
		"iconRef": "Spruce_Door.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Spruce_Sign",
		"iconRef": "Spruce_Sign.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Spyglass",
		"iconRef": "Spyglass.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Steak",
		"iconRef": "Steak.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Stick",
		"iconRef": "Stick.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Stone_Axe",
		"iconRef": "Stone_Axe.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Axe
	},
	{
		"name": "Stone_Hoe",
		"iconRef": "Stone_Hoe.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Equipment
	},
	{
		"name": "Stone_Pickaxe",
		"iconRef": "Stone_Pickaxe.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Equipment
	},
	{
		"name": "Stone_Shovel",
		"iconRef": "Stone_Shovel.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Equipment
	},
	{
		"name": "Stone_Sword",
		"iconRef": "Stone_Sword.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Sword
	},
	{
		"name": "String",
		"iconRef": "String.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Structure_Void",
		"iconRef": "Structure_Void.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Sugar",
		"iconRef": "Sugar.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Sugar_Cane",
		"iconRef": "Sugar_Cane.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Suspicious_Stew",
		"iconRef": "Suspicious_Stew.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Sweet_Berries",
		"iconRef": "Sweet_Berries.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Totem_of_Undying",
		"iconRef": "Totem_of_Undying.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Trident",
		"iconRef": "Trident.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Trident
	},
	{
		"name": "Tropical_Fish",
		"iconRef": "Tropical_Fish.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Turtle_Egg",
		"iconRef": "Turtle_Egg.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Turtle_Shell",
		"iconRef": "Turtle_Shell.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Warped_Door",
		"iconRef": "Warped_Door.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Warped_Fungus_on_a_Stick",
		"iconRef": "Warped_Fungus_on_a_Stick.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Warped_Sign",
		"iconRef": "Warped_Sign.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Water_Bucket",
		"iconRef": "Water_Bucket.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Wheat",
		"iconRef": "Wheat.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Wheat_Seeds",
		"iconRef": "Wheat_Seeds.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "White_Bed",
		"iconRef": "White_Bed.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "White_Candle",
		"iconRef": "White_Candle.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "White_Dye",
		"iconRef": "White_Dye.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Wooden_Axe",
		"iconRef": "Wooden_Axe.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Axe
	},
	{
		"name": "Wooden_Hoe",
		"iconRef": "Wooden_Hoe.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Equipment
	},
	{
		"name": "Wooden_Pickaxe",
		"iconRef": "Wooden_Pickaxe.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Equipment
	},
	{
		"name": "Wooden_Shovel",
		"iconRef": "Wooden_Shovel.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Equipment
	},
	{
		"name": "Wooden_Sword",
		"iconRef": "Wooden_Sword.png",
		"isStackable": false,
		"isEnchantable": true,
		"itemType": ItemTypes.Sword
	},
	{
		"name": "Woodland_Explorer_Map",
		"iconRef": "Woodland_Explorer_Map.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Written_Book",
		"iconRef": "Written_Book.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Yellow_Bed",
		"iconRef": "Yellow_Bed.png",
		"isStackable": false,
		"isEnchantable": false
	},
	{
		"name": "Yellow_Candle",
		"iconRef": "Yellow_Candle.png",
		"isStackable": true,
		"isEnchantable": false
	},
	{
		"name": "Yellow_Dye",
		"iconRef": "Yellow_Dye.png",
		"isStackable": true,
		"isEnchantable": false
	}
]