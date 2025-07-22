import { 
    AnimatedButton,
    FAQ, 
    GlassButton, 
    GlowingCard, 
    InProgressChip, 
    NeumorphButton,
    OnlineChip,
    SearchField,
    TestToast,
    ThemeSelector,
    Toggle 
} from "../../components";

export default function ComponentShowcase() {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <FAQ/>
            <Toggle />
            <NeumorphButton />
            <AnimatedButton />
            <OnlineChip />
            <InProgressChip />
            <SearchField />
            <ThemeSelector />
            <TestToast />
            <GlassButton />
            <GlowingCard />
        </div>
    )
}