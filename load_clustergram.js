
make_clust('mult_cats.json');
// make_clust('filter_row_sum.json');
// make_clust('mult_cats.json');
// make_clust('large_vect_post_example.json');
// make_clust('vect_post_example.json');
// make_clust('enr_clust_example.json');
// make_clust('default_example.json');
// make_clust('ccle.json');
// make_clust('updn_example.json');
// make_clust('narrow_example.json');
// make_clust('narrow_long_name.json');
// make_clust('bar_example.json');
// make_clust('kin_sub_example.json');
// make_clust('harmonogram_example.json');
// make_clust('sim_mat.json');


function make_clust(inst_network){

    d3.json(inst_network, function(network_data){
      console.log(network_data);//network_data��Ϊ��ȡ��json����

      var outer_margins = {
          'top':2,
          'bottom':30,
          'left':5,
          'right':2
        };

      var viz_size = {
        'width':1000,
        'height':600
      };

      // define arguments object
      var args = {
        root: '#container-id-1',
        'network_data': network_data,
        // 'row_label':'Row Title',
        // 'col_label':'Colum Title',
        'outer_margins': outer_margins,
        // 'outline_colors':['black','yellow'],
        // 'tile_click_hlight':true,
        // 'show_label_tooltips':true,
        'show_tile_tooltips':true,
        // 'make_tile_tooltip':make_tile_tooltip,
        // 'highlight_color':'yellow',
        // 'super_label_scale':1.25,
        // 'transpose':true,
        // 'ini_expand':true,
        // 'col_label_scale':1.5,
        // 'row_label_scale':0.8
        // 'force_square':1
        // 'opacity_scale':'log',
        // 'input_domain':2,
        // 'do_zoom':false,
        // 'tile_colors':['#ED9124','#1C86EE'],
        // 'background_color':'orange',
        // 'tile_title': true,
        // 'click_group': click_group_callback,
        // 'size':viz_size
        // 'order':'rank'
        // 'row_order':'clust'
        // 'col_order':'rank',
        // 'ini_view':{'N_row_sum':'100'},
        // 'current_col_cat':'category-one'
        // 'title':'Clustergrammer',
        'about':'',
        // 'sidebar_width':150,
        // 'sidebar_icons':false,
        // 'row_search_placeholder':'Gene',
        // 'buffer_width':10,
        // 'show_sim_mat':'col',
        // 'clamp_opacity':0.85,
        // 'max_allow_fs':15,
      };

      function resize_container(){

        var screen_width = window.innerWidth;
        var screen_height = window.innerHeight - 30;

        d3.select(args.root)
          .style('width', screen_width+'px')
          .style('height', screen_height+'px');
      }

      resize_container();//�趨��ʾ����Ĵ�С

      d3.select(window).on('resize',function(){
        resize_container();
        cgm.resize_viz();
      });

      cgm = Clustergrammer(args);


  });

}
