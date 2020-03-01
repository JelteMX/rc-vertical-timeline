// @ts-ignore

import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import VerticalTimeline from '../VerticalTimeline'
import VerticalTimelineElement from '../VerticalTimelineElement'
import { ReactElement } from 'react';

const getContainer = (element: ReactElement, showDebug = false): (ChildNode|null) => {
  const { container, debug } = render(element)
  if (showDebug) {
    debug();
  }
  return container.firstChild;
}

test('Normal render', async () => {
  const el = getContainer(<VerticalTimeline></VerticalTimeline>)

  expect(el).toHaveClass('rc-vertical-timeline')
  expect(el).toHaveClass('rc-vertical-timeline--animate')
  expect(el).toHaveClass('rc-vertical-timeline--two-columns')
})

test('Single no animate', async () => {
  const el = getContainer(<VerticalTimeline animate={false} layout="1-column"></VerticalTimeline>)

  expect(el).not.toHaveClass('rc-vertical-timeline--animate')
  expect(el).toHaveClass('rc-vertical-timeline--one-column')
})

test('Has end of scroll container', async () => {
  const mock = jest.fn();
  const el = getContainer(<VerticalTimeline endOfScroll={mock}></VerticalTimeline>)
  const scrollContainer = el?.lastChild;

  expect(scrollContainer).toHaveClass('rc-vertical-timeline-end-off-scroll')
  expect(mock).toHaveBeenCalledWith(false)
})

test('Has loader', async () => {
  const el = getContainer(<VerticalTimeline loading loaderClassName={'loadert'}></VerticalTimeline>)
  const loader = el?.firstChild;

  expect(loader).toHaveClass('rc-vertical-timeline-loader')
  expect(loader).toHaveClass('loadert')
})

test('Renders Elements', async () => {
  const el = getContainer(
    <VerticalTimeline>
      <VerticalTimelineElement></VerticalTimelineElement>
      <VerticalTimelineElement></VerticalTimelineElement>
      <VerticalTimelineElement></VerticalTimelineElement>
      <VerticalTimelineElement></VerticalTimelineElement>
      <VerticalTimelineElement></VerticalTimelineElement>
    </VerticalTimeline>
  );

  expect(el?.childNodes.length).toBe(6)
})
