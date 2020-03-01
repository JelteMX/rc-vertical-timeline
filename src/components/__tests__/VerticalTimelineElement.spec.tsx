import * as React from 'react'
import { render,  } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import VerticalTimelineElement from '../VerticalTimelineElement'
import { ReactElement } from 'react';

const getContainer = (element: ReactElement, showDebug = false): (ChildNode|null) => {
  const { container, debug,  } = render(element)
  if (showDebug) {
    debug();
  }
  return container.firstChild;
}

test('Basic', async () => {
  const el = getContainer(<VerticalTimelineElement></VerticalTimelineElement>)

  expect(el).toHaveClass('rc-vertical-timeline-element')
  expect(el).toHaveClass('rc-vertical-timeline-element--no-children')
})

test('Position: left', async () => {
  const el = getContainer(<VerticalTimelineElement position='left' />)
  expect(el).toHaveClass('rc-vertical-timeline-element--left')
})

test('Position: right', async () => {
  const el = getContainer(<VerticalTimelineElement position='right' />)
  expect(el).toHaveClass('rc-vertical-timeline-element--right')
})

test('No animation', async () => {
  const el = getContainer(<VerticalTimelineElement animate={false} />)
  expect(el).toHaveClass('rc-vertical-timeline-element--no-animate')
})

test('Visibility change', async () => {
  const mock = jest.fn();
  const el = getContainer(<VerticalTimelineElement visibilitySensorProps={{ onChange: mock, partialVisibility: true, offset: {} }} />)

  const iconEl = el?.firstChild;

  expect(iconEl).toHaveClass('is-hidden');
  expect(mock).toHaveBeenCalledWith(false);
})
