'use client'
import Header from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { store } from "@/store/app-store";
import { Provider } from "react-redux";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <div className="flex h-screen bg-gray-50">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-auto">
                    {
                        children
                    }
                </main>
                </div>
            </div>
        </Provider>
    )
}

