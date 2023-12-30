import "@/app/globals.css"
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader";
import "@/styles/workforce.css"


export default function WorkforcePage() {
    const router = useRouter();
    const title = "Our Team";
    const subtitle = "";
    return (
        <div> 
            <AnimatePresence mode="wait">
            <motion.div
                key={router.route}
                initial="initialState"
                animate="animateState"
                exit="exitState"
                transition={
                    {
                        duration: 0.75,
                    }
                }
                variants={{
                    initialState: {
                        opacity: 0,
                    },
                    animateState: {
                        opacity: 1,
                    },
                    exitState: {
                    },
                }}
            >
                <div className="main-container">
                    <PageHeader title={title} subtitle={subtitle}></PageHeader>

                    <div className="grid-container">
                        <div className="vertical-container">
                                    <h1>IT Events</h1>
                                    <div className="card-container">

                                        <div className="myCard">
                                            <div className="innerCard">
                                                <div className="frontSide">
                                                    {/* <Image src=""></Image> */}
                                                    <p className="card-title">Data Detective:<br />A Murder Mystery Quest</p>
                                                    <p>Hover Me</p>
                                                </div>
                                                <div className="backSide">
                                                    <p className="card-title">BACK SIDE</p>
                                                    <p>Leave Me</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="myCard">
                                            <div className="innerCard">
                                                <div className="frontSide">
                                                    <p className="card-title">FRONT SIDE</p>
                                                    <p>Hover Me</p>
                                                </div>
                                                <div className="backSide">
                                                    <p className="card-title">BACK SIDE</p>
                                                    <p>Leave Me</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="myCard">
                                            <div className="innerCard">
                                                <div className="frontSide">
                                                    <p className="card-title">FRONT SIDE</p>
                                                    <p>Hover Me</p>
                                                </div>
                                                <div className="backSide">
                                                    <p className="card-title">BACK SIDE</p>
                                                    <p>Leave Me</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence >
        </div>
    )
}