import React, {memo} from 'react'

// добавить в проект иконки и импортировать
// const downIcon = iconDown
// const upIcon = iconUp
// const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент,
    // sort: (click) => down (click) => up (click) => '' (click) => down ...


    if (sort === down) return up
    if (sort === up) return ''
    return down
}

const SuperSort: React.FC<SuperSortPropsType> = memo((
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }



    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                style={{width: '15px', height: '15px', marginLeft: '5px'}}
                alt={id + '-icon-' + sort}
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
})

export default SuperSort
