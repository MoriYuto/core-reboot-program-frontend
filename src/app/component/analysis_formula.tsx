const styles = {
  container:
    "rounded-2xl px-[3.2rem] py-[3.2rem] bg-surface-container-light flex flex-col gap-[3.2rem] w-full",
  row: "flex flex-col md:flex-row justify-center items-center gap-[1.6rem]",
  item: "rounded-xl px-[2.4rem] py-[1.6rem] border-[0.1rem] bg-primary-glass border-primary",
  resultItem: "rounded-xl px-[2.4rem] py-[1.6rem] bg-primary",
  itemInner: "flex flex-row justify-center items-center md:items-start gap-[0.8rem]",
  multiply: "text-label-large text-primary",
  equalsDesktop: "text-label-large text-primary md:block hidden",
  equalsMobileSpacer: "text-label-large text-on-surface md:hidden block",
} as const;

export const AnalysisFormula = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.item}>
          <div className={styles.itemInner}>
            <p className="text-label-large text-primary">16</p>
            <p className="text-body-small text-on-surface">メインタイプ</p>
          </div>
        </div>
        <span className={styles.multiply} aria-hidden="true">×</span>
        <div className={styles.item}>
          <div className={styles.itemInner}>
            <p className="text-label-large text-primary">4</p>
            <p className="text-body-small text-on-surface">サブタイプ</p>
          </div>
        </div>
        <span className={styles.equalsDesktop} aria-hidden="true">=</span>
        <div className={`${styles.equalsMobileSpacer}`} aria-hidden="true" />
        <div className={styles.resultItem}>
          <div className={styles.itemInner}>
            <p className="text-label-large text-on-primary">64</p>
            <p className="text-body-small text-on-primary">通りの行動分析</p>
          </div>
        </div>
      </div>
    </div>
  );
};
