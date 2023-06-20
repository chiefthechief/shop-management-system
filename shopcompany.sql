PGDMP     0    $                {            shopcompany    15.3    15.3 *    :           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ;           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            <           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            =           1262    49350    shopcompany    DATABASE     �   CREATE DATABASE shopcompany WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United Kingdom.1252';
    DROP DATABASE shopcompany;
                postgres    false            �            1259    49381 	   customers    TABLE     =  CREATE TABLE public.customers (
    id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    tel_number integer NOT NULL,
    email character varying(80) NOT NULL,
    password character varying(88) NOT NULL,
    customer_address character varying(255)
);
    DROP TABLE public.customers;
       public         heap    postgres    false            �            1259    49371    delivery    TABLE     �   CREATE TABLE public.delivery (
    delivery_id integer NOT NULL,
    deliverer_id integer NOT NULL,
    delivery_report character varying(50) NOT NULL,
    customer_id integer NOT NULL,
    product_id character varying(50)
);
    DROP TABLE public.delivery;
       public         heap    postgres    false            �            1259    49356 	   inventory    TABLE     �   CREATE TABLE public.inventory (
    product_id character varying(50) NOT NULL,
    product_name character varying(50) NOT NULL,
    product_qty integer NOT NULL,
    supplier_id integer NOT NULL,
    product_price numeric NOT NULL
);
    DROP TABLE public.inventory;
       public         heap    postgres    false            �            1259    57673    mart    TABLE     �   CREATE TABLE public.mart (
    customer_id integer NOT NULL,
    product_id character varying(50) NOT NULL,
    type character varying(50) NOT NULL,
    qty integer
);
    DROP TABLE public.mart;
       public         heap    postgres    false            �            1259    49391    reciept    TABLE     �   CREATE TABLE public.reciept (
    reciept_id integer NOT NULL,
    customer_id integer NOT NULL,
    teller_id integer NOT NULL
);
    DROP TABLE public.reciept;
       public         heap    postgres    false            �            1259    49421    sold    TABLE     .  CREATE TABLE public.sold (
    sold_id integer NOT NULL,
    product_id character varying(50) NOT NULL,
    product_qty integer NOT NULL,
    mode character varying(50) NOT NULL,
    transmission character varying(50) NOT NULL,
    customer_id integer,
    reciept_id integer,
    teller_id integer
);
    DROP TABLE public.sold;
       public         heap    postgres    false            �            1259    57644    supplier    TABLE     �   CREATE TABLE public.supplier (
    supplier_id integer NOT NULL,
    supplier_name character varying(255) NOT NULL,
    contact integer
);
    DROP TABLE public.supplier;
       public         heap    postgres    false            �            1259    49361    teller    TABLE     �   CREATE TABLE public.teller (
    teller_id integer NOT NULL,
    t_arrival date NOT NULL,
    t_depart date NOT NULL,
    teller_log_code integer NOT NULL
);
    DROP TABLE public.teller;
       public         heap    postgres    false            �            1259    49351    workers    TABLE     |  CREATE TABLE public.workers (
    id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    role character varying(50) NOT NULL,
    dob date NOT NULL,
    id_number character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    password character varying(80) NOT NULL,
    tel_number integer NOT NULL
);
    DROP TABLE public.workers;
       public         heap    postgres    false            3          0    49381 	   customers 
   TABLE DATA           m   COPY public.customers (id, first_name, last_name, tel_number, email, password, customer_address) FROM stdin;
    public          postgres    false    218   �4       2          0    49371    delivery 
   TABLE DATA           g   COPY public.delivery (delivery_id, deliverer_id, delivery_report, customer_id, product_id) FROM stdin;
    public          postgres    false    217   �5       0          0    49356 	   inventory 
   TABLE DATA           f   COPY public.inventory (product_id, product_name, product_qty, supplier_id, product_price) FROM stdin;
    public          postgres    false    215   46       7          0    57673    mart 
   TABLE DATA           B   COPY public.mart (customer_id, product_id, type, qty) FROM stdin;
    public          postgres    false    222   �6       4          0    49391    reciept 
   TABLE DATA           E   COPY public.reciept (reciept_id, customer_id, teller_id) FROM stdin;
    public          postgres    false    219   �6       5          0    49421    sold 
   TABLE DATA           x   COPY public.sold (sold_id, product_id, product_qty, mode, transmission, customer_id, reciept_id, teller_id) FROM stdin;
    public          postgres    false    220   -7       6          0    57644    supplier 
   TABLE DATA           G   COPY public.supplier (supplier_id, supplier_name, contact) FROM stdin;
    public          postgres    false    221   ~7       1          0    49361    teller 
   TABLE DATA           Q   COPY public.teller (teller_id, t_arrival, t_depart, teller_log_code) FROM stdin;
    public          postgres    false    216   �7       /          0    49351    workers 
   TABLE DATA           o   COPY public.workers (id, first_name, last_name, role, dob, id_number, email, password, tel_number) FROM stdin;
    public          postgres    false    214   �7       �           2606    49385    customers customers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_pkey;
       public            postgres    false    218            �           2606    49375    delivery delivery_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT delivery_pkey PRIMARY KEY (delivery_id);
 @   ALTER TABLE ONLY public.delivery DROP CONSTRAINT delivery_pkey;
       public            postgres    false    217            �           2606    49360    inventory inventory_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.inventory
    ADD CONSTRAINT inventory_pkey PRIMARY KEY (product_id);
 B   ALTER TABLE ONLY public.inventory DROP CONSTRAINT inventory_pkey;
       public            postgres    false    215            �           2606    57679    mart mart_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.mart
    ADD CONSTRAINT mart_pkey PRIMARY KEY (customer_id, product_id, type);
 8   ALTER TABLE ONLY public.mart DROP CONSTRAINT mart_pkey;
       public            postgres    false    222    222    222            �           2606    49395    reciept reciept_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.reciept
    ADD CONSTRAINT reciept_pkey PRIMARY KEY (reciept_id);
 >   ALTER TABLE ONLY public.reciept DROP CONSTRAINT reciept_pkey;
       public            postgres    false    219            �           2606    49425    sold sold_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.sold
    ADD CONSTRAINT sold_pkey PRIMARY KEY (sold_id);
 8   ALTER TABLE ONLY public.sold DROP CONSTRAINT sold_pkey;
       public            postgres    false    220            �           2606    57648    supplier supplier_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.supplier
    ADD CONSTRAINT supplier_pkey PRIMARY KEY (supplier_id);
 @   ALTER TABLE ONLY public.supplier DROP CONSTRAINT supplier_pkey;
       public            postgres    false    221            �           2606    57655    teller teller_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.teller
    ADD CONSTRAINT teller_pkey PRIMARY KEY (teller_log_code);
 <   ALTER TABLE ONLY public.teller DROP CONSTRAINT teller_pkey;
       public            postgres    false    216            �           2606    49355    workers workers_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.workers
    ADD CONSTRAINT workers_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.workers DROP CONSTRAINT workers_pkey;
       public            postgres    false    214            �           2606    49386 "   delivery delivery_customer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT delivery_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(id);
 L   ALTER TABLE ONLY public.delivery DROP CONSTRAINT delivery_customer_id_fkey;
       public          postgres    false    217    3213    218            �           2606    49376 #   delivery delivery_deliverer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT delivery_deliverer_id_fkey FOREIGN KEY (deliverer_id) REFERENCES public.workers(id);
 M   ALTER TABLE ONLY public.delivery DROP CONSTRAINT delivery_deliverer_id_fkey;
       public          postgres    false    3205    214    217            �           2606    57656 !   delivery delivery_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT delivery_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.inventory(product_id);
 K   ALTER TABLE ONLY public.delivery DROP CONSTRAINT delivery_product_id_fkey;
       public          postgres    false    217    3207    215            �           2606    57680    mart mart_customer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.mart
    ADD CONSTRAINT mart_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(id);
 D   ALTER TABLE ONLY public.mart DROP CONSTRAINT mart_customer_id_fkey;
       public          postgres    false    218    222    3213            �           2606    57685    mart mart_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.mart
    ADD CONSTRAINT mart_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.inventory(product_id);
 C   ALTER TABLE ONLY public.mart DROP CONSTRAINT mart_product_id_fkey;
       public          postgres    false    222    215    3207            �           2606    49396     reciept reciept_customer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.reciept
    ADD CONSTRAINT reciept_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(id);
 J   ALTER TABLE ONLY public.reciept DROP CONSTRAINT reciept_customer_id_fkey;
       public          postgres    false    3213    218    219            �           2606    49401    reciept reciept_teller_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.reciept
    ADD CONSTRAINT reciept_teller_id_fkey FOREIGN KEY (teller_id) REFERENCES public.workers(id);
 H   ALTER TABLE ONLY public.reciept DROP CONSTRAINT reciept_teller_id_fkey;
       public          postgres    false    219    3205    214            �           2606    49426    sold sold_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sold
    ADD CONSTRAINT sold_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.inventory(product_id);
 C   ALTER TABLE ONLY public.sold DROP CONSTRAINT sold_product_id_fkey;
       public          postgres    false    215    220    3207            �           2606    57649    sold sold_reciept_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sold
    ADD CONSTRAINT sold_reciept_id_fkey FOREIGN KEY (reciept_id) REFERENCES public.reciept(reciept_id);
 C   ALTER TABLE ONLY public.sold DROP CONSTRAINT sold_reciept_id_fkey;
       public          postgres    false    3215    220    219            �           2606    57666    sold sold_teller_id_fkey    FK CONSTRAINT     {   ALTER TABLE ONLY public.sold
    ADD CONSTRAINT sold_teller_id_fkey FOREIGN KEY (teller_id) REFERENCES public.workers(id);
 B   ALTER TABLE ONLY public.sold DROP CONSTRAINT sold_teller_id_fkey;
       public          postgres    false    220    3205    214            �           2606    49366    teller teller_teller_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.teller
    ADD CONSTRAINT teller_teller_id_fkey FOREIGN KEY (teller_id) REFERENCES public.workers(id) ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.teller DROP CONSTRAINT teller_teller_id_fkey;
       public          postgres    false    216    214    3205            3   +  x�u��n�@����:\�3�@w�"AE**U۸`
8��Ы/5MJb����9�,��"dU��4d���}}NJ�b�KP���@�����C|V�
a����:����@�o��n�0�W4g@�]̛���@�P8R��dҵ[������/<���L�m1�m']���.��m�c�yp��!�#-�j�g���70�~|�鎙�}3�η�O�Ɓ�[�J��|?9�l�/��a�f�e�Vh3��U�5�TF��W��h/��|�	#���4S����L5h��Dg�_�qv��� ���r      2   8   x�3442�4440��44006��5R\��F&8�Mq��A�����!�.(�1z\\\ =�	      0   T   x��5200��LIM�Q�����4400 ��Fz\�@yCN�Ģ�Ē��<�#�.' ۈ�;3/]��(19;�.k����� ���      7   L   x�34002��5200�,�,���,.���2
��7�.7'9�����$!SL!d!$!CT!'��Lc� Th+�      4   )   x�3400�44006�4440�2����h|ߘ+F��� �5!      5   A   x�32006��5R�Ɯ�y9�y��E�ũEe���@Qi�ihh`�ReN�bSR��8F��� ��*�      6   &   x�340�(��M,�L�/�427741167����� ��O      1   /   x�3440�4202�5�Ѕ0��4��ih``b�e���I�W� ��      /   �   x�}ͽn�0��ٹ�Y�>�1v6h\� #$�nH�O�������yu����9��F�B��@� DO��D�>o� �t^��B��bS`�c�H6.+�}���m�n|��|.�ŗu��Z^>�,��gNvn�M�&O��r�oWjR�ͧ�j��<G�25�顮�m��K�Q/� �`��j��H�΀��q�yd.� ���,>���()������y?_sY�     