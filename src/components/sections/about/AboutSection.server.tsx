import { Users, Award, Server, Globe } from "lucide-react"
import { StatCardClient } from "@/components/ui/StatCard.client"
import { AboutHeaderClient } from "@/components/client/AboutHeader.client"
import { AboutMissionCardClient } from "@/components/client/AboutMissionCard.client"

export const AboutSectionServer = () => {
    return (
        <section className="bg-[#FAFAFA] py-24 px-4 md:px-8 font-['Inter',_sans-serif]">
            <div className="max-w-7xl mx-auto">

                {/* --- Header --- */}
                <AboutHeaderClient />

                {/* --- Grid --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Large Dark Card */}
                    <AboutMissionCardClient />

                    {/* Stats Grid */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <StatCardClient
                            value="50+"
                            label="Enterprise Clients"
                            icon={<Users className="w-6 h-6" />}
                            delay={0.1}
                        />
                        <StatCardClient
                            value="15+"
                            label="Years Combined Experience"
                            icon={<Award className="w-6 h-6" />}
                            delay={0.2}
                        />
                        <StatCardClient
                            value="100%"
                            label="Server-Side Focused"
                            icon={<Server className="w-6 h-6" />}
                            delay={0.3}
                        />
                        <StatCardClient
                            value="24/7"
                            label="US + India Support"
                            icon={<Globe className="w-6 h-6" />}
                            delay={0.4}
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
