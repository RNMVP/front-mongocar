type Serverity = "success" | "info" | "warn" | "danger" | "help" | "primary" | "secondary" | "contrast" | null | undefined
type Variant = "text" | "outlined" | undefined
type Size = "small" | "large" | undefined

export default interface ButtonOptions {
    severity: Serverity;
    variant: Variant;
    size: Size;
}
