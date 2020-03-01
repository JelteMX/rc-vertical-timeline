import * as React from 'react'
import { VerticalTimeline, VerticalTimelineElement} from '../src/index'
import { ReactElement, Component } from 'react';

const createElement = (i: number): ReactElement => {
    return (
        <VerticalTimelineElement key={i}>
            <span>Item: {i}</span>
        </VerticalTimelineElement>
    );
}

interface InfiniteScrollState {
    items: Array<{

    }>
}

class InfiniteScroll extends Component<{}, InfiniteScrollState> {
    constructor(props) {
        super(props);
        this.state = { items: [
            {}, {}, {}, {}, {}
        ] }
    }
    render() {
        return (
            <VerticalTimeline
                endOfScroll={this.onScrollEnd.bind(this)}
            >
                {this.state.items.map((item, i) => createElement(i))}
            </VerticalTimeline>
        )
    }
    onScrollEnd(visible: boolean) {
        if (visible) {
            const items = [...this.state.items];
            items.push({});
            this.setState({ items })
        }
    }
}


export default { title: 'Loader' }

export const emptyWithLoader = () => (
    <VerticalTimeline loading>

    </VerticalTimeline>
)

export const infiniteScroll = () => (
    <InfiniteScroll />
)
