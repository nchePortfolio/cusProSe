# -*- coding: utf-8 -*-
"""
Created on Thu Apr 23 16:29:15 2020

@author: nicolas
"""
import os
import glob
import tkinter as tk
from tkinter import filedialog as fd
from tkinter import ttk
import PIL
from PIL import Image, ImageTk

from prosecda.gui import xml_parser


#class Combobox(ttk.Combobox):
#    def __init__(self, master, text, **kwargs):
#        ttk.Combobox.__init__(self, master=master, **kwargs)
#        self.master = master
#        self.selected_item = None
#        self.text = text
#        self.initialize()
#        
#    def initialize(self):
#        self.current(0)
#        self.get_item(event="<<ComboboxSelected>>")
#        
#        self.bind("<<ComboboxSelected>>", self.get_item)
#        
#    def get_item(self, event):
#        self.selected_item = self.get()
#        self.master.master.infoframe.insert_text(text=self.text+self.selected_item+'\n')
            
class Combobox(ttk.Combobox):
    def __init__(self, master, text, **kwargs):
        ttk.Combobox.__init__(self, master=master, **kwargs)
        self.master = master
        self.selected_item = None
        self.text = text
        self.initialize()
        
    def initialize(self):
        self.current(0)
        self.get_item(event="<<ComboboxSelected>>")
        
        self.bind("<<ComboboxSelected>>", self.get_item)
        
    def get_item(self, event):
        self.selected_item = self.get()
        self.master.master.infoframe.insert_text(text=self.text+self.selected_item+'\n')
        

class Optionframe(tk.LabelFrame):
    def __init__(self, master):
        tk.LabelFrame.__init__(self, master, bd=2,
                               text='Options', labelanchor='n')
        self.master = master
        self.initialize()

    def initialize(self):
        self.configure_grid()
        self.grid(sticky='nsew')
        self.grid_propagate(0)
        
    def create_cbb(self, match):    
        # combobox for protein matches
        self.label_protein = tk.Label(self, text = 'Select a protein')
        self.label_protein.grid(row=1, column=0, sticky='nw')
    
        values = match.get_proteinids()
        self.cbb_protein = Combobox(self, values=values, width=10,
                                         text=' - Reading protein ')
        self.cbb_protein.grid(row=1, column=1, sticky='nwe')
        
        # combobox for architectures of a selected protein
        self.label_architecture = tk.Label(self, text = 'Select an architecture')
        self.label_architecture.grid(row=2, column=0, sticky='nw')
        
        idx_protein = match.get_proteinids().index(self.cbb_protein.selected_item)
        values = match.proteins[idx_protein]
        self.cbb_architecture = Combobox(self, values=values, width=10,
                                         text='   - Architecture ')
        self.cbb_architecture.grid(row=2, column=1, sticky='nwe')        

    def configure_grid(self):
        for row in range(20):
            self.rowconfigure(row, weight=1)
            
        self.columnconfigure(0, weight=1)
        self.columnconfigure(1, weight=1)
        
      
    def get_item(self, event, combobox):
        selected = combobox.get()
        text = '- Reading Protein {}\n'.format(os.path.basename(selected))
        self.master.infoframe.insert_text(text=text)
        
    def architecture_combobox(self, values):
        self.label = tk.Label(self, text = "Select a protein")
        self.label.grid(row=2, column=0, sticky='nw')
        
        self.combobox = ttk.Combobox(self, values=values, width=10)
        self.combobox.grid(row=2, column=1, sticky='nwe')
        self.combobox.current(0)
        selected = self.combobox.get()
        text = '- Reading Protein {}\n'.format(os.path.basename(selected))
        self.master.infoframe.insert_text(text=text)

class Canvasframe(tk.Frame):
    def __init__(self, master):
        tk.Frame.__init__(self, master, bd=1,
                          highlightbackground='black', highlightthickness=1)
        self.master = master
        self.initialize()
        self.draw()

    def initialize(self):
        self.configure_grid()
        self.grid_propagate(0)
        
        self.init_canvas()        
        
    def configure_grid(self):
        self.rowconfigure(0, weight=1)
        self.columnconfigure(0, weight=1)
        
    def init_canvas(self):
        self.canvas = tk.Canvas(self, bg='white', width=1000, height=600,
                                scrollregion=(0, 0, 1000, 600))
        self.canvas.grid(padx=0, pady=0, sticky='nsew')
        
        self.scrollb_h = tk.Scrollbar(self, orient='horizontal',
                                      command=self.canvas.xview)                                      
        self.scrollb_v = tk.Scrollbar(self, orient='vertical',
                                      command=self.canvas.yview)
                                      
        self.canvas.configure(xscrollcommand=self.scrollb_h.set,
                              yscrollcommand=self.scrollb_v.set)
                              
        self.scrollb_h.grid(row=1, column=0, sticky='nsew')
        self.scrollb_v.grid(row=0, column=1, sticky='nsew')
        
        self.canvas.bind("<Button-1>", self.mouse_down)
        self.canvas.bind("<B1-Motion>", self.mouse_motion)
        self.canvas.bind("<B1-ButtonRelease>", self.mouse_up)        
        
    def draw(self):
        self.canvas.create_line(0, 50, 420, 50, width=2)        
        self.canvas.create_line(210, 0, 210, 282, width=2)
    
    
        path2img = '/home/nicolas/Images/'
        self.image = Image.open(path2img+'gimp_oval_blue-alpha55.png')
        self.image2 = Image.open(path2img+'gimp_oval_red-alpha50.png')

        self.img = ImageTk.PhotoImage(self.image.resize((200, 100)))
        self.img2 = ImageTk.PhotoImage(self.image2.resize((200, 100)))
        
        self.canvas_img = self.canvas.create_image(250, 100, image=self.img)
        self.canvas_img2 = self.canvas.create_image(200, 150, image=self.img2)
        
#        self.oval1 = self.canvas.create_oval(10,110,150,210, fill='blue')
#        self.oval2 = self.canvas.create_oval(50,160,200,250, fill='red', stipple="gray50")
        
    def mouse_down(self, event):
        # saves click coords
        self.x_coor_click, self.y_coor_click = event.x, event.y
        
        # finds the closest object around the click
        self.sele = self.canvas.find_overlapping(self.x_coor_click, self.y_coor_click,
                                                 self.x_coor_click+2, self.y_coor_click+2)
        
        # move sele to the foreground
        self.canvas.lift(self.sele)
        
    def mouse_up(self, event):
        if self.sele:
            self.sele = None
        
    def mouse_motion(self, event):
        # get coords of the mouse 
        self.x_coor_motion, self.y_coor_motion = event.x, event.y
        self.dx = self.x_coor_motion - self.x_coor_click
        self.dy = self.y_coor_motion - self.y_coor_click
        
        if self.sele:        
            self.canvas.move(self.sele, self.dx, self.dy)
            self.x_coor_click, self.y_coor_click = event.x, event.y
        

class Infoframe(tk.LabelFrame):
    def __init__(self, master):
        tk.LabelFrame.__init__(self, master,
                          text='Message box', labelanchor='n')
        self.master = master
        self.initialize()
        self.create_scrollbar()

    def initialize(self):
        self.configure_grid()
        self.grid_propagate(0)
        
    def configure_grid(self):
        self.rowconfigure(0, weight=1)            
        self.columnconfigure(0, weight=1)
        
    def create_scrollbar(self):
        self.scrollb_v = tk.Scrollbar(self, orient=tk.VERTICAL)
        self.scrollb_v.grid(row=0, column=1, sticky='nsew')
        self.scrollb_h = tk.Scrollbar(self, orient=tk.HORIZONTAL)
        self.scrollb_h.grid(row=1, column=0, sticky='nsew')
        
        self.text = tk.Text(self, yscrollcommand=self.scrollb_v.set,
                            xscrollcommand=self.scrollb_h.set,
                            bg='black', fg='yellow')
        self.text.grid(row=0, column=0, sticky="nsew", padx=(1), pady=1)
        
        self.scrollb_v.config(command=self.text.yview)
        self.scrollb_h.config(command=self.text.xview)
        
    def insert_text(self, text):
        self.text.insert('end', text)
        self.text.see('end')


class MenuBar(tk.Menu):
    initialdir = '/home/nicolas/spyder_workspace/ProSeCDA/prosecda/tests/prosecda_trial/'

    def __init__(self, master):
        tk.Menu.__init__(self, master)
        self.master = master
        self.initialize()

        
    def initialize(self):
        self.file_menu = tk.Menu(self.master, tearoff=False)
        self.file_cascade()
        
    def file_cascade(self):        
        self.add_cascade(label="File", underline=0, menu=self.file_menu)
        
        self.file_menu.add_command(label="Open an xml file...", 
                                   underline=0, command=self.open_file)
        self.file_menu.add_command(label="Open an xml directory...",
                                   underline=12, command=self.open_dir)
        self.file_menu.add_command(label="Save as...",
                                   underline=0, command=self.save_as)
        self.file_menu.add_separator()
        self.file_menu.add_command(label="Exit",
                                   underline=0, command=self.master.destroy)
        
    def open_file(self):
        xml_filename = fd.askopenfilename(initialdir=self.initialdir,
                               filetypes=[('XML files', '*.xml')])
                               
        text = 'File {} selected...\n'.format(os.path.basename(xml_filename))
        deco = '-'*len(text)+'\n'
        self.master.mainframe.infoframe.insert_text(text=text+deco+'\n')
        
        match = xml_parser.Prosecda_match(xml_file=xml_filename)        

        self.master.mainframe.optionframe.create_cbb(match=match)
        
    def open_dir(self):
        self.dirname = fd.askdirectory(initialdir=self.initialdir)+'/'
        
        files = [os.path.basename(f) for f in glob.glob(self.dirname + "*.xml")]
#        if not files:
#            txt = 'No xml files in {}\n'.format(self.dirname)
#            self.text.insert(tk.END, txt)
#        else:        
#            self.create_combobox(values=files)
    
    def save_as(self):
        _file = fd.asksaveasfile(mode="w", defaultextension=".png")
        
#        text = self.rules_framelist.text.get("1.0",'end')
        text = "empty file"
        if _file:
            _file.write(text)
            
        _file.close()

class Mainframe(tk.Frame):
    def __init__(self, master, width, height):
        tk.Frame.__init__(self, master, width=width, height=height)
        self.master = master
        self.initialize()
        self.update()
#        print('Mainframe width: {}'.format(self.winfo_width()))

    def initialize(self):
        self.configure_grid()
        self.grid(sticky='nsew')
        self.grid_propagate(0)
        
        # creates infoframe
        self.infoframe = Infoframe(self)
        self.infoframe.grid(row=12, column=1,
                  rowspan=8, columnspan=1,
                  padx=5, pady=5, sticky='nsew')
        self.infoframe.update()
#        print('Infoframe width: {}'.format(self.infoframe.winfo_width()))
        
        # creates optionframe
        self.optionframe = Optionframe(self)
        self.optionframe.grid(row=0, column=0,
                  rowspan=20, columnspan=1,
                  padx=5, pady=5, sticky='nsew')
        self.optionframe.update()
#        print('Optionframe width: {}'.format(self.optionframe.winfo_width()))
                  
        # creates canvasframe
        self.canvasframe = Canvasframe(self)
        self.canvasframe.grid(row=0, column=1,
                  rowspan=12, columnspan=1,
                  padx=5, pady=5, sticky='nsew')
        self.canvasframe.update()
#        print('Canvasframe width: {}'.format(self.canvasframe.winfo_width()))
                  
                  
    def configure_grid(self):
        for row in range(20):
            self.rowconfigure(row, weight=1)
            
        self.columnconfigure(0, weight=3)
        self.columnconfigure(1, weight=5)        
        

class Visual_App(tk.Tk):
    def __init__(self):
        tk.Tk.__init__(self)
        self.initialize()
        self.run()
        
    def initialize(self):
        self.title("Visual app for ProSeCDA")
        self.width = 900
        self.height = 600
        self.columnconfigure(0, weight=1)
        self.rowconfigure(0, weight=1)
        self.menubar = MenuBar(self)
        self.config(menu=self.menubar)
        
    def run(self):        
        self.mainframe = Mainframe(self, width=self.width, height=self.height)
        self.update()
        self.resizable(True, True)
        self.mainloop()


if __name__ == '__main__':     
    Visual_App()


import tkinter as tk
from tkinter import ttk

# --- functions ---

category = {'home': ['utilities','rent','cable'],
    'car': ['gas','oil','repairs'],
    'rv':['parks','maintenance','payment']}

class Application(tk.Frame):

    def __init__(self, master=None, Frame=None):
        tk.Frame.__init__(self, master)
        super(Application,self).__init__()
        self.grid(column = 5,row = 20,padx = 50,pady = 50)
        self.createWidgets()

    def getUpdateData(self,  event):
        self.AccountCombo['values'] = category[self.CategoryCombo.get()]

    def createWidgets(self):
        tk.Label(text = 'Combo Box #1:').grid(row = 2,column = 1,padx = 10)
        tk.Label(text = 'Combo Box #2:').grid(row = 4,column = 1,padx = 10)
        
        self.CategoryCombo = ttk.Combobox(width = 15,  values = list(category.keys()))
        self.CategoryCombo.current(0)
        self.CategoryCombo.bind('<<ComboboxSelected>>', self.getUpdateData)
        self.CategoryCombo.grid(row = 3,column = 1,padx = 10,pady = 25)
        
        self.AccountCombo = ttk.Combobox(width=15, values=category[self.CategoryCombo.get()])
        self.AccountCombo.grid(row = 5,column = 1,pady = 25,padx = 10)

app = Application()
app.master.title('Yearly Budget Setup')
app.mainloop()

#    path2run = 'run_2020-04-28T13.28.38.475835/xml_matches/'
#    path2xml = '/home/nicolas/spyder_workspace/ProSeCDA/prosecda/tests/prosecda_trial/'+path2run
#    
#    xml_file = path2xml+'Fusicocadiene_synthase.xml'
#    xml_file = path2xml+'NRPS.xml'
#    
#    
#    match = xml_parser.Prosecda_match(xml_file)
#    match.get_proteinids()
#    match.match_nb
#    
#    rule = match.rule
#    rule.name
#    rule.comment
#    rule.mandatories
#    rule.forbidden
#        
#    inputs = match.inputs
#    inputs.domtblout
#    inputs.proteome
#    inputs.yamlrules
#    
#    proteins = match.proteins
#    protein = proteins[0]
#    protein.id
#    protein.sequence
#    protein.length
#    protein.arch_nb
#    protein.architectures
#    architecture = protein.architectures[0]
    
    
    
    
    
    
