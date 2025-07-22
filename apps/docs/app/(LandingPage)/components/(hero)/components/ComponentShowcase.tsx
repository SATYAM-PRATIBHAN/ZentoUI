import {
  AnimatedButton,
  FAQ,
  GlassButton,
  GlowingCard,
  InProgressChip,
  NeumorphButton,
  OnlineChip,
  ProfileCard,
  SearchField,
  ThemeSelector,
  Toggle,
} from "../../../../components";

export default function ComponentShowcase() {
  return (
    <div className="columns-2 sm:columns-3 gap-4 space-y-4 space-x-4">
      <GlassButton />
      <ProfileCard />
      <OnlineChip />

      <Toggle />
      <AnimatedButton />
      <InProgressChip />
      <SearchField />
      <ThemeSelector />
      <FAQ />

      <GlowingCard />
      <NeumorphButton />
    </div>
  );
}
