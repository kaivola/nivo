import { BasicTooltip } from '@nivo/tooltip'
import { Datum, TooltipProps } from './types'

export const WaffleCellTooltip = <RawDatum extends Datum>({ cell }: TooltipProps<RawDatum>) => (
    <BasicTooltip
        id={cell.data.label}
        value={cell.data.formattedValue}
        enableChip={true}
        color={cell.data.color}
    />
)

/*
import PropTypes from 'prop-types'
import { BasicTooltip } from '@nivo/tooltip'

const WaffleCellTooltip = ({
    position,
    row,
    column,
    color,
    data,
    theme,
    tooltipFormat,
    tooltip,
}) => (
    <BasicTooltip
        id={data.label}
        value={data.value}
        enableChip={true}
        color={color}
        theme={theme}
        format={tooltipFormat}
        renderContent={
            typeof tooltip === 'function'
                ? tooltip.bind(null, {
                      position,
                      row,
                      column,
                      color,
                      ...data,
                  })
                : null
        }
    />
)

WaffleCellTooltip.displayName = 'WaffleCellTooltip'
WaffleCellTooltip.propTypes = {
    position: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    tooltipFormat: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    tooltip: PropTypes.func,
}

export default WaffleCellTooltip
*/