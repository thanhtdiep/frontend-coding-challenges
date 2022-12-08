import React, { FC } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

interface Props {
    suggestions: string[]
}

interface Input {
    value: string,
    activeSug: number,
    filteredSug: string[],
    show: boolean
}

const Autocomplete: FC<Props> = ({ suggestions }) => {
    const [input, setInput] = React.useState<Input>({
        value: '',
        activeSug: 0,
        filteredSug: [],
        show: false
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newInput = e.currentTarget.value;
        // filtered suggestion based on input
        const filteredSug = suggestions.filter((sug) =>
            sug.toLowerCase().indexOf(newInput.toLowerCase()) > -1)

        // update state
        setInput(prev => ({
            ...prev,
            value: newInput,
            activeSug: 0,
            show: newInput ? true : false,
            filteredSug
        }))
    }

    const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const newValue = e.currentTarget.innerText;
        if (newValue) {
            setInput(prev => ({
                ...prev,
                value: newValue,
                activeSug: 0,
                show: false,
                filteredSug: []
            }))
        }
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.defaultPrevented) {
            return;
        }

        switch (e.code) {
            case "Enter":
                setInput(prev => ({
                    ...prev,
                    activeSug: 0,
                    show: false,
                    value: input.filteredSug[input.activeSug]
                }))
                break;
            case "ArrowUp":
                if (!input?.activeSug) return;
                setInput(prev => ({
                    ...prev,
                    activeSug: prev?.activeSug - 1
                }))
                break;
            case "ArrowDown":
                if (input.activeSug - 1 === input.filteredSug.length) return;
                setInput(prev => ({
                    ...prev,
                    activeSug: prev.activeSug + 1
                }))
                break;
        }
    }

    return (
        <>
            <div className='flex flex-row relative'>
                <input
                    type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={input.value}
                    className='flex flex-1 border-2 border-gray-400 p-2 focus:outline-none'
                />
                <div className='right-4 absolute mt-3'>
                    {input.show ?
                        <Icon icon={faCaretDown} className='w-3 text-gray-400' />
                        :
                        <Icon icon={faCaretUp} className='w-3 text-gray-400' />
                    }
                </div>
            </div>
            {input.show && input.value ?
                input.filteredSug.length ?
                    <ul className='flex flex-1 flex-col border-2 border-t-0 border-gray-400 list-none mt-0 overflow-y-auto pl-0'>
                        {input.filteredSug.map((s, idx) => (
                            <li key={idx} className={`${idx == input.activeSug ? 'bg-gray-400' : 'bg-white'} text-black p-[.5rem] cursor-pointer hover:bg-gray-400`}
                                onClick={onClick}
                            >
                                {s}
                            </li>
                        ))}
                    </ul>
                    :
                    <div className='p-[.5rem] bg-gray-400'>
                        No suggestions!
                    </div>
                :
                null
            }
        </>
    )
}

export default Autocomplete;