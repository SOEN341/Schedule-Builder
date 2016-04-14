<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sections', function(Blueprint $table){

           $table->string('section');
           $table->increments('sectionId')->integer();
           $table->string('classroom');
           $table->string('semester');
           $table->string('type');
           $table->integer('dayOffered');
           $table->time('beginTime');
           $table->time('endTime');
           $table->integer('courseId')->unsigned();
           $table->foreign('courseId')->references('courseId')->on('courses');
           $table->string('courseCode');
           $table->integer('sectionNum')->unsigned();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('sections');
    }
}
