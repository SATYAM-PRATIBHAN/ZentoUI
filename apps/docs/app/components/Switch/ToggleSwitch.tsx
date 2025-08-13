import { ToggleButton } from "@satyampratibhan/zento-ui";

export default function Toggle() {
  return (
    <div className="flex items-center justify-center px-4">
      <ToggleButton
        checkedValue={false}
        onChange={() => console.log("clicked")}
      />
    </div>
  );
}
