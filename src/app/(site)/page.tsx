import {Header} from "../../../components/Header";
import {ListItem} from "../../../components/ListItem";

export default function Home() {
    return (
        <main className="
            bg-neutral-900
            w-full
            h-full
            overflow-hidden
            overflow-y-auto
            rounded-lg
        ">
            <Header className="mb-2">
                <h1 className="
                text-white
                text-3xl
                font-semibold
                ">
                    Welcome Back!
                </h1>
                <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-3
                2xl:grid-cols-4
                gap-3
                mt-4
                ">
                    <ListItem
                        image="/images/liked.png"
                        href="liked"
                        name="Liked Song"
                    />
                </div>
            </Header>
        </main>
    )
}
