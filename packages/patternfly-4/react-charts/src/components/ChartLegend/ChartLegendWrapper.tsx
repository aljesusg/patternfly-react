import * as React from 'react';
import { PaddingProps } from 'victory';
import { ChartLegendOrientation, ChartLegendPosition } from '../ChartLegend';
import { ChartCommonStyles, ChartThemeDefinition } from '../ChartTheme';
import {getLegendX, getLegendY, getPaddingForSide, getTheme} from '../ChartUtils';

export enum ChartLegendConfigChartType {
  chart = 'chart',
  pie = 'pie'
}

/**
 * Helper to position a legend component within a component's SVG
 *
 * Example:
 *
 * <ChartLegendWrapper
 *   chartHeight={200}
 *   chartWidth={600}
 *   position="right"
 *   svgHeight={200}
 *   svgWidth={800}
 * >
 *   <ChartLegend data={[{ name: 'Cats' }, { name: 'Dogs' }]} orientation="vertical"/>
 * </ChartLegendWrapper>
 */
export interface ChartLegendWrapperProps {
  /**
   * The type of chart the legend will apply to. Valid types are; 'area', 'bar', 'line', 'pie', and 'stack'
   *
   * Note: This is used to calculate padding defined by the theme
   */
  chartType?: string;
  /**
   * The legend child to render
   */
  children?: React.ReactNode;
  /**
   * Defines a horizontal shift from the x coordinate.
   */
  dx?: number;
  /**
   * Defines a vertical shift from the y coordinate.
   */
  dy?: number;
  /**
   * Specifies the height the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   */
  height?: number;
  /**
   * The orientation prop takes a string that defines whether legend data
   * are displayed in a row or column. When orientation is "horizontal",
   * legend items will be displayed in a single row. When orientation is
   * "vertical", legend items will be displayed in a single column. Line
   * and text-wrapping is not currently supported, so "vertical"
   * orientation is both the default setting and recommended for
   * displaying many series of data.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The padding props specifies the amount of padding in number of pixels between
   * the edge of the chart and any rendered child components. This prop can be given
   * as a number or as an object with padding specified for top, bottom, left
   * and right.
   */
  padding?: PaddingProps;
  /**
   * The legend position relation to the donut chart. Valid values are 'bottom', 'bottom-left', and 'right'
   */
  position?: 'bottom' | 'bottom-left' | 'right';
  /**
   * The theme prop takes a style object with nested data, labels, and parent objects.
   * You can create this object yourself, or you can use a theme provided by
   * When using ChartLegend as a solo component, implement the theme directly on
   * ChartLegend. If you are wrapping ChartLegend in ChartChart or
   * ChartGroup, please call the theme on the outermost wrapper component instead.
   */
  theme?: ChartThemeDefinition;
  /**
   * Specifies the theme color. Valid values are 'blue', 'green', 'multi', etc.
   *
   * Note: Not compatible with theme prop
   *
   * @example themeColor={ChartThemeColor.blue}
   */
  themeColor?: string;
  /**
   * Specifies the theme variant. Valid values are 'dark' or 'light'
   *
   * Note: Not compatible with theme prop
   *
   * @example themeVariant={ChartThemeVariant.light}
   */
  themeVariant?: string;
  /**
   * Specifies the width of the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   */
  width?: number;
}

export const ChartLegendWrapper: React.FunctionComponent<ChartLegendWrapperProps> = ({
  chartType = 'chart',
  children,
  dx = 0,
  dy = 0,
  padding,
  position = ChartCommonStyles.legend.position as ChartLegendPosition,
  themeColor,
  themeVariant,

  // destructure last
  theme = getTheme(themeColor, themeVariant),
  orientation = theme.legend.orientation as ChartLegendOrientation,
  height = theme.chart.height,
  width = theme.chart.width
}: ChartLegendWrapperProps) => {
  // Render children
  const renderChildren = () =>
    React.Children.toArray(children).map((child: any) => {
      const childProps = child.props ? child.props : {};
      const legendX = getLegendX({
        chartType,
        dx,
        height,
        legendData: childProps.data,
        legendOrientation: childProps.legendOrientation ? childProps.legendOrientation : orientation,
        legendPosition: position,
        legendProps: childProps,
        padding,
        theme,
        width
      });
      const legendY = getLegendY({
        chartType,
        dy,
        height,
        legendData: childProps.data,
        legendOrientation: childProps.legendOrientation ? childProps.legendOrientation : orientation,
        legendProps: childProps,
        legendPosition: position,
        padding,
        theme,
        width
      });
      if (childProps.data) {
        return React.cloneElement(child as React.ReactElement<any>, {
          orientation,
          standalone: false,
          theme,
          x: legendX > 0 ? legendX : 0,
          y: legendY > 0 ? legendY : 0,
          ...childProps,
        });
      }
      return child;
    });

  return (
    <React.Fragment>
      {renderChildren()}
    </React.Fragment>
  );
};
