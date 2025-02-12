import '@/components/shared/SectionTitle.scss';

interface SectionTitleProps {
  textEn: string;
  textZh: string;
  className?: string;
}

const SectionTitle = ({className = "", textEn, textZh }: SectionTitleProps) => {
  return (
    <div className={`bf-section-title ${className || ""}`}>
      <div className="content">
        <h2 className="en">{textEn}</h2>
        <h2 className="zh">{textZh}</h2>
      </div>
    </div>
  )
};
export default SectionTitle;