#!/usr/bin/env python
import fileinput
import os
import urllib
#fullfilename = os.path.join('/home/amisha/python_programs/style.xml')
#print fullfilename
#urllib.urlretrieve("https://raw.githubusercontent.com/GreatDevelopers/pbOSM/master/style.xml",fullfilename)

for line in fileinput.FileInput("/home/amisha/osm/openstreetmap-carto/bound.xml",inplace=1):
    line = line.replace("[gis]","[india]")
    print line
