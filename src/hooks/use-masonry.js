import { useEffect, useRef } from 'react'

const useMasonry = itemClass => {
    const ref = useRef(null)

    function resizeGridItem(item) {
        const grid = ref.current
        const rowHeight = parseInt(
            window.getComputedStyle(grid).getPropertyValue(`grid-auto-rows`)
        )
        console.log('resizeGridItem -> rowHeight', rowHeight)
        const rowGap = parseInt(
            window.getComputedStyle(grid).getPropertyValue(`grid-row-gap`)
        )
        console.log('resizeGridItem -> rowGap', rowGap)
        const rowSpan = Math.ceil(
            (item.getBoundingClientRect().height + rowGap) /
                (rowHeight + rowGap)
        )
        console.log('resizeGridItem -> rowSpan', rowSpan)
        item.style.gridRowEnd = `span ${rowSpan}`
    }

    function resizeAllGridItems() {
        const grid = ref.current
        const allItems = grid.getElementsByClassName(itemClass)
        for (let item of allItems) {
            resizeGridItem(item)
        }
    }

    useEffect(() => {
        resizeAllGridItems()
        window.addEventListener(`resize`, resizeAllGridItems)
    }, [])

    return ref
}

export default useMasonry
