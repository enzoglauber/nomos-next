export interface RowLabelValueProps {
  label: string;
  value?: string | null;
}

function RowLabelValue({ label, value }: RowLabelValueProps) {
  return (
    <div className="mb-2" data-testid="row-label-value">
      <b
        data-testid="label"
        className="text-sm font-bold text-text-primary mr-2"
      >
        {label}
      </b>
      <span
        data-testid="value"
        className="text-sm text-secondary"
      >
        {value && !['null', null].includes(value) ? value : '-'}
      </span>
    </div>
  );
}

export default RowLabelValue;
