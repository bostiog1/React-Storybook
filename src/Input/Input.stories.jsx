import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
};

export const Small = () => <Input variant="small" />;
export const Medium = () => <Input variant="medium" />;
export const Large = () => <Input variant="large" />;

Small.storyName = "Small Input";
