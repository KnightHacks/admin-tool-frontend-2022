import { useState } from 'react'
import HackathonInfoBar from '../components/hackathon/HackathonInfoBar'
import InputGroup from '../components/InputGroup'
import { Option, SelectGroup } from '../components/SelectGroup'
import { dummyHackathonData, Hackathon, Semester } from '../models/hackathon'

interface HackathonProps {
    hackathonData?: Hackathon
}

export default function Settings({
    hackathonData = dummyHackathonData[0],
}: HackathonProps) {
    const [semester, setSemester] = useState<Semester>(hackathonData.term.semester)
    const [year, setYear] = useState<number>(hackathonData.term.year)
    const semesterOptions: Option<Semester>[] = [
        { value: Semester.FALL, label: Semester.FALL },
        { value: Semester.SPRING, label: Semester.SPRING },
        { value: Semester.SUMMER, label: Semester.SUMMER },
    ]

    return (
        <>
            <HackathonInfoBar />
            <div className="w-screen h-screen p-10">
                <h1 className="px-5 font-bold text-3xl text-subHeading-color">
                    Hackathon Details
                </h1>
                <div className="px-5 [&>*]:pt-5">
                    <SelectGroup<Semester>
                        label="Semester"
                        value={semester}
                        options={semesterOptions}
                        setValue={(semester) => setSemester(semester)}
                        alignStart={true}
                    />
                    <InputGroup
                        label="Year"
                        value={year}
                        setValue={setYear}
                        type="number"
                        alignStart={true}
                    />
                </div>
            </div>
        </>
    )
}