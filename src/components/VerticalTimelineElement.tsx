import { ReactNode, ReactElement, CSSProperties, Component, Fragment } from 'react';
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';
import React from 'react';

interface VisibilityState {
    visible: boolean;
}

interface VisibilitySensorProps {
    onChange?: (visible: boolean) => void,
    partialVisibility: boolean,
    offset: object,
}

interface TimelineElementProps {
    children: ReactElement|Array<ReactElement>,
    className: string,

    contentArrowStyle: CSSProperties | object,
    contentStyle: CSSProperties | object,
    contentClassName: string,

    innerClassName: string,

    date: ReactElement | ReactNode | string,
    dateClassName: string,

    icon: ReactElement,
    iconClassName: string,
    iconStyle: CSSProperties | object,
    iconOnClick: () => void,

    id: string,
    position: '' | 'left' | 'right',
    style: CSSProperties | object,

    animate: boolean;
    visibilitySensorProps: VisibilitySensorProps,
}

class VerticalTimelineElement extends Component<TimelineElementProps, VisibilityState> {
    onVisibilitySensorChange: (() => void) = this.visibilityChangeHandlder.bind(this);

    static defaultProps = {
        children: '',
        className: '',
        contentArrowStyle: null,
        contentStyle: null,
        contentClassName: '',
        innerClassName: '',
        icon: null,
        iconClassName: '',
        iconOnClick: null,
        iconStyle: null,
        id: '',
        style: null,
        date: '',
        dateClassName: '',
        position: '',
        animate: true,
        visibilitySensorProps: { partialVisibility: true, offset: { bottom: 40 } },
    }

    constructor(props: TimelineElementProps) {
        super(props);
        this.state = { visible: false }
    }

    render() : ReactNode {
        const {
            children,
            className,
            contentArrowStyle,
            contentStyle,
            contentClassName,
            innerClassName,
            date,
            dateClassName,
            icon,
            iconClassName,
            iconOnClick,
            iconStyle,
            id,
            position,
            style,
            visibilitySensorProps,
            animate
        } = this.props;

        const { visible } = this.state;

        const visibleClasses = {
            'bounce-in': visible,
            'is-hidden': !visible,
        };

        return (
            <div id={id} style={style} className={classNames(className, 'rc-vertical-timeline-element', {
                    'rc-vertical-timeline-element--left': position === 'left',
                    'rc-vertical-timeline-element--right': position === 'right',
                    'rc-vertical-timeline-element--no-children': children === '',
                    'rc-vertical-timeline-element--no-animate': !animate
                })}>
                <VisibilitySensor
                    partialVisibility={visibilitySensorProps.partialVisibility}
                    offset={visibilitySensorProps.offset}
                    onChange={this.onVisibilitySensorChange}
                >
                    <Fragment>
                        <span style={iconStyle} onClick={iconOnClick} className={classNames(iconClassName,'rc-vertical-timeline-element-icon', visibleClasses)}>
                            {icon}
                        </span>
                        <div style={contentStyle} className={classNames(contentClassName,'rc-vertical-timeline-element-content', visibleClasses)}>
                            <div style={contentArrowStyle} className="rc-vertical-timeline-element-content-arrow"/>
                            <div className={classNames(innerClassName, 'rc-vertical-timeline-element-inner')}>
                                {children}
                            </div>
                            <span className={classNames(dateClassName, 'rc-vertical-timeline-element-date')} >
                                {date}
                            </span>
                        </div>
                    </Fragment>
                </VisibilitySensor>
            </div>
        )
    }

    visibilityChangeHandlder(isVisible: boolean) {
        const { onChange } = this.props.visibilitySensorProps;

        if (typeof onChange === 'function') {
          onChange(isVisible);
        }

        if (isVisible) {
          this.setState({ visible: true });
        }
    }

}

export default VerticalTimelineElement;
