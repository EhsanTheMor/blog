import { CSSProperties } from "react";

type Props = { source: string, alt: string, sx?: CSSProperties }

export default function Image({ source, alt, sx }: Props) {
    const styles: CSSProperties = {
        marginBottom: 24
    }

    return (
        <img style={{ ...styles, ...sx }} src={source} alt={alt} />
    )
}

