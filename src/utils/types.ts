export type Game = {
  id: number; // Unique ID for the giveaway
  title: string; // Title of the game
  description: string; // Description of the giveaway
  worth: string; // Value of the game in USD (e.g., "$19.99")
  thumbnail: string; // URL of the game thumbnail image
  instructions: string; // How to claim the giveaway
  open_giveaway_url: string; // Link to the giveaway page
  published_date: string; // Date when the giveaway was published
  type: string; // Type of giveaway (e.g., "Game", "DLC")
  platforms: string; // Platforms for the game (e.g., "PC, PS4")
  end_date: string | null; // Giveaway end date or null if not applicable
  users: number; // Number of users claiming the giveaway
  status: string; // Status of the giveaway (e.g., "Active")
  gamerpower_url: string; // URL to the giveaway page on GamerPower
  open_giveaway: string; // URL to open the giveaway directly
};
