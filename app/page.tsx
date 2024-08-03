import { BlogPosts } from './components/posts';

export default function Page() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-center">
        Luke Zaruba
      </h1>
      <p className="mb-8 max-w-2xl mx-auto text-lg text-center">
        {`Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi ornare risus potenti et nec lorem.
        Semper iaculis eleifend augue consequat; placerat dolor habitasse metus tincidunt. Volutpat
        tristique vitae auctor dignissim vivamus arcu, nisi iaculis. Natoque faucibus facilisis
        netus in auctor pharetra accumsan rutrum. Scelerisque vivamus nec laoreet eu ad eu natoque
        class. Sagittis integer adipiscing; proin suspendisse sociosqu volutpat potenti maximus? Per
        quisque lorem cubilia risus augue nec placerat eleifend.`}
      </p>
      <p className="mb-8 max-w-2xl mx-auto text-lg text-center">
        {`Hendrerit dolor iaculis diam lacus amet metus sit. Hendrerit finibus tellus interdum ut dui
        est erat torquent. Conubia sodales leo rutrum enim in varius elit hac turpis. Vivamus volutpat
        risus rhoncus condimentum, nunc aptent hac. Eleifend tristique ultricies potenti maecenas
        phasellus rhoncus aliquam ridiculus imperdiet. Congue phasellus non sagittis, penatibus dapibus
        fusce sit. Rhoncus volutpat fermentum lobortis praesent feugiat curae arcu vivamus nec. Mauris
        felis nascetur convallis sed sem quis per rhoncus. Dui rhoncus nisi nibh magnis cubilia.`}
      </p>
      <div className="my-12">
        <BlogPosts />
      </div>
    </section>
  );
}
