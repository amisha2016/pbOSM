#zoom_levels {
/*[admin_level = 'admin_level_2'][zoom>=3][zoom<5] {
text-name: "[name]";
["name" != null]["boundary" = null] {
          text-name: "[name]";
        }
        ["name" != null]["boundary" != null] {
          text-name: [name] + "\n" + [boundary];
        }
text-line-spacing: -1.3;
text-size:12;
text-halo-radius: @standard-halo-radius;
text-fill: #000;
text-face-name: @book-fonts;
line-color: #000;
polygon-fill: #765543;
polygon-gamma:0.4;
polygon-opacity: 0.5;

}*/
[admin_level = 'admin_level_3'][zoom>=5][zoom<6] {
polygon-fill: @landform-color * 0.1; 
polygon-gamma:0.4;
line-color: #000;
polygon-opacity: 0.65;
text-name: "[name]";
text-size:12;
text-line-spacing: -1.3;
text-halo-radius: @standard-halo-radius;
text-fill: #000;
text-face-name: @book-fonts;
}
[admin_level = 'admin_level_4'][zoom>=6][zoom<8]{
polygon-fill: #cccccc;
polygon-gamma:0.4;
line-color: #000;
polygon-opacity: 0.65;
text-name: "[name]";
text-size:16;
text-line-spacing: -1.65;
text-halo-radius: @standard-halo-radius;
text-fill: #000;
text-face-name: @book-fonts;

}
[admin_level = 'admin_level_5'][zoom>=8][zoom<10] {
polygon-fill: #ccc149;
polygon-gamma:0.4;
line-color: #000;
polygon-opacity: 0.65;
text-name: "[name]";
text-size:11;
text-line-spacing: -1.3;
text-halo-radius: @standard-halo-radius;
text-fill: #000;
text-face-name: @book-fonts;

}
[admin_level = 'admin_level_6'][zoom>=10][zoom<12] {
polygon-fill: #cc1039;
polygon-gamma:0.4;
line-color: #000;
polygon-opacity: 0.65;
text-name: "[name]";
text-size:14;
text-line-spacing: -1.3;
text-halo-radius: @standard-halo-radius;
text-fill: #000;
text-face-name: @book-fonts;

}
[admin_level = 'admin_level_7'][zoom>=12][zoom<14] {
polygon-fill: #1e7b79;
polygon-gamma:0.4;
line-color: #000;
polygon-opacity: 0.65;
text-name: "[name]";
text-size:13;
text-line-spacing: -1.3;
text-halo-radius: @standard-halo-radius;
text-fill: #000;
text-face-name: @book-fonts;

}
[admin_level = 'admin_level_8'][zoom>=14][zoom<16] {
polygon-fill: #6c7b6d;
polygon-gamma:0.4;
line-color: #000;
polygon-opacity: 0.65;
text-name: "[name]";
text-size:13;
text-line-spacing: -1.3;
text-halo-radius: @standard-halo-radius;
text-fill: #000;
text-face-name: @book-fonts;

}
[admin_level = 'admin_level_9'][zoom>=16][zoom<17] {
polygon-fill:  #d68035;
polygon-gamma:0.4;
line-color: #000;
polygon-opacity: 0.5;
text-name: "[name]";
text-size:13;
text-line-spacing: -1.3;
text-halo-radius: @standard-halo-radius;
text-fill: #000;
text-face-name: @book-fonts;

}
[admin_level = 'admin_level_10'][zoom>=17][zoom<19] {
polygon-fill: #295332;
polygon-gamma:0.4;
line-color: #000;
polygon-opacity: 0.5;
text-name: "[name]";
text-size:12;
text-line-spacing: -1.3;
text-halo-radius: @standard-halo-radius;
text-fill: #000;
text-face-name: @book-fonts;

}
}

#india_boundary{
[zoom>=3][zoom<5]
{line-color: #E76423;
line-width: 2;
}
}

