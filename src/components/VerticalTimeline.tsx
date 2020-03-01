import React, { ReactNode, FunctionComponent, ReactElement } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import classNames from 'classnames';

type TimelineLayout = '1-column' | '2-columns';

interface TimelineProps {
  children?: ReactNode|Array<ReactNode>
  className?: string
  animate?: boolean
  layout?: TimelineLayout
  loading?: boolean
  loaderClassName?: string
  endOfScroll?: (visible: boolean) => void
}

interface LoaderProps {
  className?: string;
  msg?: string
}

interface EndOfScrollProps {
  onChange?: ((visible: boolean) => void)
}

const endOfScrollContainer: FunctionComponent<EndOfScrollProps> = ({ onChange }): ReactElement => {
  return (<VisibilitySensor
    partialVisibility={false}
    resizeCheck
    scrollCheck
    onChange={onChange}
  >
    <div className={classNames('rc-vertical-timeline-end-off-scroll')}></div>
  </VisibilitySensor>);
}

const loadingIndicator: FunctionComponent<LoaderProps> = ({ className, msg }): ReactElement => {
  return (<div className={classNames(className, 'rc-vertical-timeline-loader', {
    'rc-vertical-timeline--with-text': !!msg
  })}>
    <div className="rc-vertical-timeline-loader-icon">
      <svg viewBox="0 0 1024 1024" focusable="false" className="rc-vertical-timeline-loader-svg" width="1em" height="1em" fill="#000">
          <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
      </svg>
    </div>
  </div>)
}

const VerticalTimeline: FunctionComponent<TimelineProps> = ({ animate, className, layout, children, loading, loaderClassName, endOfScroll}): ReactElement => {
  const layoutValue: TimelineLayout = layout ? layout : "2-columns";
  const animateValue: boolean = typeof animate !== "undefined" ? animate : true;
  const classNameValue = className || '';

  const onChange = (visible: boolean): void => {
    if (typeof endOfScroll === 'function') {
      endOfScroll(visible);
    }
  }

  return (
    <div
      className={classNames(classNameValue, 'rc-vertical-timeline', {
        'rc-vertical-timeline--animate': animateValue,
        'rc-vertical-timeline--two-columns': layoutValue === '2-columns',
        'rc-vertical-timeline--one-column': layoutValue === '1-column',
        'rc-vertical-timeline--no-children': !children
      })}
    >
      {children}
      {loading ? loadingIndicator({ className: loaderClassName }) : null}
      {endOfScrollContainer({ onChange })}
    </div>
  )
}

export default VerticalTimeline
