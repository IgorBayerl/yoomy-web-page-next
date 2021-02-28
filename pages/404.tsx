import Link from 'next/link'

export default function FourOhFour() {
    return (
        <>
            <h1>404 - Page Not Found</h1>
            <Link href="/">
                <a>
                    Go back homeeee
                </a>
            </Link>
        </>
    )
}