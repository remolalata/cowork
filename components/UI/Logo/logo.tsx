import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    invert?: boolean
}

const Logo: React.FC<LogoProps> = (props) => {
    const src = props.invert ? "/images/logo-inverted.svg" : "/images/logo.svg";

    return (
        <Link href={"/"}>
            <Image
                src={src}
                width={119}
                height={24}
                alt="Cowork"
            />
        </Link>
    )
}

export default Logo;