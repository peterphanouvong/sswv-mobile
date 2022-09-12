import { Text, TextProps } from "./Themed";

export function MonoText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}

export function LightText(props: TextProps) {
  return <Text {...props} style={[props.style, { color: "#9f9f9f" }]} />;
}

export function TitleText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontWeight: "600" }]} />;
}
