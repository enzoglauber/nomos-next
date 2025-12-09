export interface SubHeaderProps {
  title: string;
  subtitle: string;
}

function SubHeader({ title, subtitle }: SubHeaderProps) {
  return (
    <div data-testid="subheader">
      <h2 className="text-2xl font-semibold text-secondary mb-4" data-testid="title">
        {title}
      </h2>
      <p className="text-sm text-text-primary" data-testid="subtitle">
        {subtitle}
      </p>
    </div>
  );
}

export default SubHeader;
