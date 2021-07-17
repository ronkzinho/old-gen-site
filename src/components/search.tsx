import React, { Dispatch, SetStateAction, useMemo, useState } from "react";

interface searchProps {
    search: string;
    setSearch: Dispatch<SetStateAction<searchProps["search"]>>;
}

export const Search: React.FC<searchProps> = ({ search, setSearch }) => {
    const [showInput, setShowInput] = useState(false);
    useMemo(() => {
        if (search === "") {
            setShowInput(false);
        } else {
            setShowInput(true);
        }
    }, [search]);
    return (
        <div>
            <p>Search for generators</p>
            <input
                className="search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};
