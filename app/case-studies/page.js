import CaseStudyExplorer from '@/components/CaseStudyExplorer';

export const metadata = {
  title: 'Case Studies',
  description:
    'Six real-world examples of plastic waste conservation, from a school in Assam to a plastic-to-fuel reactor in the USA.'
};

export default function CaseStudiesPage() {
  return (
    <>
      <h1>📚 Case Studies</h1>
      <p className="lede">
        Six real-world examples of how plastic waste is being turned into a resource —
        from a school in Assam to a microwave reactor in the USA. Each one has its own
        page with key details, sources, and the lesson it teaches. Use the filters to
        narrow the list by topic.
      </p>

      <CaseStudyExplorer />
    </>
  );
}
